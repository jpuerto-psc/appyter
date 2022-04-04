import contextlib
import logging
logger = logging.getLogger(__name__)

from appyter.context import get_env, get_jinja2_env
from appyter.ext.dict import dict_collision_free_update
from appyter.ext.fsspec.core import url_to_chroot_fs
from appyter.ext.urllib import parse_file_uri
from appyter.parse.nb import nb_to_ipynb_io
from appyter.render.flask_app.constants import get_fields, get_deep_fields, get_ipynb_hash, get_nbtemplate
from appyter.render.nbconstruct import render_nb_from_nbtemplate
from appyter.ext.hashlib import sha1sum_dict
from appyter.ext.asyncio.helpers import ensure_async, ensure_async_contextmanager, ensure_sync

async def _prepare_request(req):
  ''' Extract internal session variables from request
  '''
  data = dict(_config=get_env())
  if 'catalog-integration' in data['_config']['EXTRAS']:
    from appyter.extras.catalog_integration.request import prepare_request as prepare_request_catalog
    data.update(await prepare_request_catalog(req))
  return data
prepare_request = ensure_sync(_prepare_request)

async def _prepare_data(req):
  ''' Extract fields from submission
  '''
  data = {}
  for field in get_fields():
    dict_collision_free_update(data, **field.prepare(req))
  #
  dict_collision_free_update(data, **(await _prepare_request(req)))
  return data
prepare_data = ensure_sync(_prepare_data)

async def _prepare_storage(data):
  ''' Figure out the storage fsspec URI to use for this request
  '''
  storage_uri = None
  #
  if 'catalog-integration' in data['_config']['EXTRAS']:
    from appyter.extras.catalog_integration.storage import prepare_storage as prepare_storage_catalog
    storage_uri = await prepare_storage_catalog(data)
  #
  if storage_uri is None:
    storage_uri = data['_config']['DATA_DIR']#'storage://'
  #
  return parse_file_uri(storage_uri)
prepare_storage = ensure_sync(_prepare_storage)

async def _prepare_results(data):
  ''' Compute instance id & ensure results exist in storage
  '''
  results_hash = sha1sum_dict(dict(ipynb=get_ipynb_hash(), data={k: v for k, v in data.items() if not k.startswith('_')}))
  data['_id'] = results_hash
  cwd = str((await _prepare_storage(data)).join('output', results_hash))
  data_fs = url_to_chroot_fs(cwd)
  data_fs_ctx = ensure_async_contextmanager(data_fs)
  async with data_fs_ctx:
    await ensure_async(data_fs.makedirs)('', exist_ok=True)
    if not await ensure_async(data_fs.exists)(data['_config']['IPYNB']):
      # construct notebook
      env = get_jinja2_env(config=data['_config'], context=data, session=results_hash)
      nbtemplate = get_nbtemplate()
      # in case of constraint failures, we'll fail here
      nb = render_nb_from_nbtemplate(env, nbtemplate, deep_fields=get_deep_fields(), data=data)
      # write notebook
      async with ensure_async(data_fs.open(data['_config']['IPYNB'], 'w')) as fw:
        nb_to_ipynb_io(nb, fw)
  #
  return results_hash
prepare_results = ensure_sync(_prepare_results)

@contextlib.asynccontextmanager
async def _prepare_executor(data, fallback=None):
  ''' Figure out the executor to use for this request
  '''
  executor_uri = None
  #
  if 'catalog-integration' in data['_config']['EXTRAS']:
    from appyter.extras.catalog_integration.executor import prepare_executor as prepare_executor_catalog
    executor_uri = await prepare_executor_catalog(data)
  #
  logger.info(f"{data=} {executor_uri=}")
  if executor_uri is not None:
    from appyter.execspec.core import url_to_executor
    async with url_to_executor(executor_uri, config=data['_config']) as executor:
      yield executor
  else:
    yield fallback
prepare_executor = ensure_sync(_prepare_executor)