import s3fs
import urllib.parse
import traceback
import logging
logger = logging.getLogger(__name__)

from appyter.ext.fs import Filesystem as FS

class Filesystem:
  def __new__(cls, uri, pathmap={}, **kwargs):
    if pathmap:
      return FS('rclone+' + uri.geturl(), pathmap=pathmap, **kwargs)
    else:
      return object.__new__(cls)
  
  def __init__(self, uri, pathmap={}, asynchronous=False, **kwargs):
    self.uri = uri
    try:
      self._config = {'asynchronous': asynchronous}
      #
      if uri.username and uri.password:
        self._config['key'] = uri.username
        self._config['secret'] = uri.password
      elif uri.username:
        self._config['token'] = uri.username
      else:
        self._config.update(dict(urllib.parse.parse_qsl(uri.query)))
      self._config['client_kwargs'] = dict(endpoint_url=f"{'https' if self._config.get('use_ssl') else 'http'}://{uri.hostname}:{uri.port or (443 if self._config.get('use_ssl') else 80)}")
      self._config['config_kwargs'] = dict(signature_version='s3v4')
      #
      self._prefix = uri.path.lstrip('/').rstrip('/') + '/'
      self._fs = s3fs.S3FileSystem(**self._config)
      if asynchronous:
        import asyncio
        asyncio.ensure_future(self._fs._connect())
    except Exception:
      logger.error(traceback.format_exc())
      raise Exception(f"An internal error occurred")
  #
  def path(self, path=''):
    return None
  #
  def __enter__(self):
    return self
  #
  def __exit__(self, *args):
    pass
  #
  def close(self):
    pass
  #
  def open(self, path, mode='r'):
    try:
      assert path
      return self._fs.open(self._prefix + path, mode=mode)
    except Exception:
      logger.error(traceback.format_exc())
      raise Exception(f"An error occurred while trying to access {path}")
  #
  def exists(self, path):
    try:
      assert path
      return self._fs.exists(self._prefix + path)
    except Exception:
      logger.error(traceback.format_exc())
      raise Exception(f"An error occurred while trying to access {path}")
  #
  def ls(self, path=''):
    ls_path = FS.join(self._prefix, path) if path else self._prefix
    return [
      f[len(ls_path)+1:]
      for f in self._fs.glob(ls_path + '/**/*')
      # note S3 only reports files anyway
    ]
  #
  def cp(self, src, dst):
    try:
      assert src and dst
      return self._fs.copy(self._prefix + src, self._prefix + dst)
    except Exception:
      logger.error(traceback.format_exc())
      raise Exception(f"An error occurred while trying to copy {src} to {dst}")
  #
  def link(self, src, dst):
    logger.info('WARNING: s3 does not support links, copying')
    return self.cp(src, dst)
  #
  def rm(self, path, recursive=False):
    try:
      assert path
      return self._fs.rm(self._prefix + path, recursive=recursive)
    except Exception:
      logger.error(traceback.format_exc())
      raise Exception(f"An error occurred while trying to access {path}")
  #
  def chmod_ro(self, path):
    logger.info('WARNING: s3 does not support chmod')
