import contextlib
import logging
logger = logging.getLogger(__name__)

def _fuse_run(url, path, mount_point, kwargs):
  import fsspec.fuse
  from appyter.ext.fsspec.core import url_to_chroot_fs
  logger.debug(f'preparing fs from {url} ({kwargs})..')
  with url_to_chroot_fs(url, **kwargs) as fs:
    logger.debug('launching fuse..')
    fsspec.fuse.run(fs, path, mount_point)
    logger.debug('teardown..')

@contextlib.asynccontextmanager
async def fs_mount(url, path, **kwargs):
  import os
  import signal
  import asyncio
  import pathlib
  import tempfile
  import traceback
  from multiprocessing import Process
  from appyter.ext.asyncio.try_n_times import try_n_times
  from appyter.ext.asyncio.run_in_executor import run_in_executor
  @run_in_executor
  def _assert_mounted(path):
    assert path.is_mount()
  @run_in_executor
  def _assert_not_mounted(path):
    assert not path.is_mount()
  @run_in_executor
  def _rmdir(path):
    path.rmdir()
  tmp = pathlib.Path(tempfile.mkdtemp())
  logger.debug(f'mounting {url} {path} onto {tmp}')
  loop = asyncio.get_running_loop()
  proc = Process(target=_fuse_run, args=(url, path, str(tmp), kwargs))
  proc.start()
  try:
    await try_n_times(3, _assert_mounted, tmp)
    logger.debug(f"fs mount ready on {tmp}")
    yield tmp
  except:
    logger.error(traceback.format_exc())
    raise
  finally:
    logger.debug(f"unmounting fs from {tmp}")
    os.kill(proc.pid, signal.SIGINT) # SIGINT cleanly stops fsspec.fuse.run
    logger.debug(f"waiting for process to end")
    await loop.run_in_executor(None, proc.join)
    await try_n_times(3, _assert_not_mounted, tmp)
    await try_n_times(3, _rmdir, tmp)
  logger.debug(f"done")
