import urllib.parse
from werkzeug.utils import secure_filename

def try_json_loads(v):
  import json
  try:
    return json.loads(v)
  except:
    return v

def try_load_list(v):
  v = try_json_loads(v)
  if type(v) in [list, tuple, set, frozenset]:
    return list(v)
  elif type(v) == str:
    return v.split(',')
  elif v is None:
    return []
  else:
    raise Exception(f"Unrecognized type for list ({type(v)})")

def dict_filter_none(d):
  return { k: v for k, v in d.items() if v }

def join_routes(*routes):
  ''' Utility function for joining routes while striping extraneous slashes
  '''
  return '/' + '/'.join([route.strip('/') for route in routes if route.strip('/')])

def secure_url(url):
  parsed = urllib.parse.urlparse(url)
  assert parsed.scheme in {'https', 'http', 'ftp'}, 'Invalid scheme'
  return url

def is_remote(url):
  try:
    secure_url(url)
    return True
  except:
    return False

def importdir(_dirname_, _package_, _globals_):
  import os, importlib
  for f in os.listdir(_dirname_):
    if f.startswith('_') or f.startswith('.'):
      continue
    if f.endswith('.py'):
      modname = f[:-len('.py')]
    elif os.path.isdir(os.path.join(_dirname_, f)):
      modname = f
    else:
      continue
    mod = importlib.import_module('.{}'.format(modname), _package_)
    _globals_.update(**{modname: mod})

def importdir_deep(_dirname_, _package_, _globals_, filter_mod=lambda m, k, v: not k.startswith('_')):
  import os, importlib
  for f in os.listdir(_dirname_):
    if f.startswith('_') or f.startswith('.'):
      continue
    if f.endswith('.py'):
      modname = f[:-len('.py')]
    elif os.path.isdir(os.path.join(_dirname_, f)):
      modname = f
    else:
      continue
    mod = importlib.import_module('.{}'.format(modname), _package_)
    _globals_.update(**{
      k: v
      for k, v in mod.__dict__.items()
      if filter_mod(mod, k, v)
    })
