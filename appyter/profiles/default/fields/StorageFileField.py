import re
from appyter.fields import Field
from appyter.ext.flask import secure_filepath, join_routes
from appyter.ext.re import re_full
from appyter.ext.fsspec.parse import parse_file_uri_fragment
from appyter.render.flask_app.download import upload_from_request

class StorageFileField(Field):
  ''' Represing a File selectable from background storage
  The field ends up being a string of the file path, for example:
  ```python
  import pandas as pd
  df = pd.read_csv({{ StorageFileField(name='my-csv', label='My CSV', storage='storage://') }})
  ```

  :param name: (str) A name that will be used to refer to the object as a variable and in the HTML form.
  :param label: (str) A human readable label for the field for the HTML form
  :param description: (Optional[str]) A long human readable description for the field for the HTML form
  :param constraint: A regular expression for validating the file name.
  :param required: (Optional[bool]) Whether or not this field is required (defaults to false)
  :param default: (str) A default value as an example and for use during prototyping
  :param examples: (Optional[Dict[str, str]]) Named url paths to example files to upload
    paths can be relative i.e. `{ "my_file.txt": url_for('static', filename='my_file.txt') }`, or a remote url.
  :param section: (Optional[str]) The name of a SectionField for which to nest this field under, defaults to a root SectionField
  :param value: (INTERNAL Any) The raw value of the field (from the form for instance)
  :param \**kwargs: Remaining arguments passed down to :class:`appyter.fields.Field`'s constructor.
  '''
  def __init__(self, constraint=r'.*', examples={}, **kwargs):
    super().__init__(
      constraint=constraint,
      examples=examples,
      **kwargs,
    )

  @property
  def raw_value(self):
    if type(self.args['value']) == str and self.args['value']:
      _uri, filename = parse_file_uri_fragment(self.args['value'])
      return secure_filepath(filename)
    else:
      return None

  def prepare(self, req):
    if getattr(req, 'files', None):
      data_path = upload_from_request(req, self.args['name'])
      if data_path:
        return {self.args['name']: data_path}
    return super().prepare(req)

  def constraint(self):
    if self.raw_value is None:
      return not self.args.get('required')
    else:
      return re.match(re_full(self.args['constraint']), self.raw_value)

  def to_cwl(self):
    schema = super().to_cwl()
    schema['type'] = f"File{'' if self.args.get('required') == True else '?'}"
    return schema

  @property
  def value(self):
    ret = super().value
    if ret is None: return ''
    else: return ret

  @property
  def public_url(self):
    try:
      from flask import request
      return join_routes(request.base_url, self.value)[1:]
    except:
      from appyter.context import get_env
      config = get_env()
      return join_routes(config.get('PUBLIC_URL', 'file:///' + config.get('CWD')), self.value)[1:]
