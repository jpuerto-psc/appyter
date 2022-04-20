Search.setIndex({docnames:["appyter","appyter.execspec","appyter.execspec.implementations","appyter.ext","appyter.ext.asyncio","appyter.ext.click","appyter.ext.fsspec","appyter.ext.fsspec.spec","appyter.ext.nbclient","appyter.ext.pathlib","appyter.ext.socketio","appyter.ext.watchgod","appyter.extras","appyter.extras.catalog_integration","appyter.helpers","appyter.orchestration","appyter.orchestration.dispatcher","appyter.parse","appyter.profiles","appyter.profiles.biojupies","appyter.profiles.bootstrap","appyter.profiles.default","appyter.profiles.default.blueprints","appyter.profiles.default.fields","appyter.profiles.default.filters","appyter.render","appyter.render.flask_app","appyter.render.nbinspect","index","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["appyter.rst","appyter.execspec.rst","appyter.execspec.implementations.rst","appyter.ext.rst","appyter.ext.asyncio.rst","appyter.ext.click.rst","appyter.ext.fsspec.rst","appyter.ext.fsspec.spec.rst","appyter.ext.nbclient.rst","appyter.ext.pathlib.rst","appyter.ext.socketio.rst","appyter.ext.watchgod.rst","appyter.extras.rst","appyter.extras.catalog_integration.rst","appyter.helpers.rst","appyter.orchestration.rst","appyter.orchestration.dispatcher.rst","appyter.parse.rst","appyter.profiles.rst","appyter.profiles.biojupies.rst","appyter.profiles.bootstrap.rst","appyter.profiles.default.rst","appyter.profiles.default.blueprints.rst","appyter.profiles.default.fields.rst","appyter.profiles.default.filters.rst","appyter.render.rst","appyter.render.flask_app.rst","appyter.render.nbinspect.rst","index.rst","modules.rst"],objects:{"":{appyter:[0,0,0,"-"]},"appyter.execspec":{core:[1,0,0,"-"],implementations:[2,0,0,"-"],registry:[1,0,0,"-"],spec:[1,0,0,"-"]},"appyter.execspec.core":{url_to_executor:[1,1,1,""]},"appyter.execspec.implementations":{cavatica:[2,0,0,"-"],dispatch:[2,0,0,"-"],docker:[2,0,0,"-"],kube:[2,0,0,"-"],local:[2,0,0,"-"],subprocess:[2,0,0,"-"],wes:[2,0,0,"-"]},"appyter.execspec.implementations.cavatica":{CavaticaExecutor:[2,2,1,""]},"appyter.execspec.implementations.cavatica.CavaticaExecutor":{protocol:[2,3,1,""]},"appyter.execspec.implementations.dispatch":{DispatchExecutor:[2,2,1,""]},"appyter.execspec.implementations.dispatch.DispatchExecutor":{protocol:[2,3,1,""]},"appyter.execspec.implementations.docker":{DockerExecutor:[2,2,1,""]},"appyter.execspec.implementations.docker.DockerExecutor":{protocol:[2,3,1,""]},"appyter.execspec.implementations.kube":{KubernetesExecutor:[2,2,1,""],endless_watch:[2,1,1,""]},"appyter.execspec.implementations.kube.KubernetesExecutor":{protocol:[2,3,1,""],submit:[2,4,1,""],wait_for:[2,4,1,""]},"appyter.execspec.implementations.local":{LocalExecutor:[2,2,1,""]},"appyter.execspec.implementations.local.LocalExecutor":{protocol:[2,3,1,""]},"appyter.execspec.implementations.subprocess":{SubprocessExecutor:[2,2,1,""]},"appyter.execspec.implementations.subprocess.SubprocessExecutor":{protocol:[2,3,1,""]},"appyter.execspec.implementations.wes":{WESExecutor:[2,2,1,""]},"appyter.execspec.implementations.wes.WESExecutor":{protocol:[2,3,1,""]},"appyter.execspec.registry":{executor:[1,1,1,""],get_executor_class:[1,1,1,""],register_implementation:[1,1,1,""]},"appyter.execspec.spec":{AbstractExecutor:[1,2,1,""]},"appyter.execspec.spec.AbstractExecutor":{parse:[1,4,1,""],protocol:[1,3,1,""],run:[1,4,1,""]},"appyter.ext":{aiohttp:[3,0,0,"-"],asyncio:[4,0,0,"-"],click:[5,0,0,"-"],contextlib:[3,0,0,"-"],cryptography:[3,0,0,"-"],dict:[3,0,0,"-"],emitter:[3,0,0,"-"],exceptions:[3,0,0,"-"],flask:[3,0,0,"-"],fsspec:[6,0,0,"-"],functools:[3,0,0,"-"],hashlib:[3,0,0,"-"],importlib:[3,0,0,"-"],io:[3,0,0,"-"],itertools:[3,0,0,"-"],json:[3,0,0,"-"],multiprocessing:[3,0,0,"-"],nbclient:[8,0,0,"-"],pathlib:[9,0,0,"-"],pytest:[3,0,0,"-"],re:[3,0,0,"-"],socketio:[10,0,0,"-"],subprocess:[3,0,0,"-"],tempfile:[3,0,0,"-"],urllib:[3,0,0,"-"],uuid:[3,0,0,"-"],watchgod:[11,0,0,"-"]},"appyter.ext.aiohttp":{run_app:[3,1,1,""],with_app_running:[3,1,1,""]},"appyter.ext.asyncio":{event_emitter:[4,0,0,"-"],event_loop:[4,0,0,"-"],helpers:[4,0,0,"-"],subprocess:[4,0,0,"-"],test_subprocess:[4,0,0,"-"],try_n_times:[4,0,0,"-"]},"appyter.ext.asyncio.event_emitter":{EventEmitter:[4,2,1,""]},"appyter.ext.asyncio.event_emitter.EventEmitter":{clear:[4,4,1,""],emit:[4,4,1,""],flush:[4,4,1,""],off:[4,4,1,""],on:[4,4,1,""],remove:[4,4,1,""],wait:[4,4,1,""]},"appyter.ext.asyncio.event_loop":{EventLoopThread:[4,2,1,""],SharedEventLoopThreadPoolExecutor:[4,2,1,""],get_event_loop:[4,1,1,""],new_event_loop:[4,1,1,""],with_event_loop:[4,1,1,""]},"appyter.ext.asyncio.event_loop.EventLoopThread":{run:[4,4,1,""],stop:[4,4,1,""]},"appyter.ext.asyncio.helpers":{anext:[4,1,1,""],awaitable_identity:[4,1,1,""],ensure_async:[4,1,1,""],ensure_async_contextmanager:[4,1,1,""],ensure_async_func:[4,1,1,""],ensure_async_generator:[4,1,1,""],ensure_async_literal:[4,1,1,""],ensure_async_wrapper:[4,1,1,""],ensure_sync:[4,1,1,""],ensure_sync_contextmanager:[4,1,1,""],ensure_sync_coro:[4,1,1,""],ensure_sync_generator:[4,1,1,""],ensure_sync_wrapper:[4,1,1,""],isasynccontextmanager:[4,1,1,""],iscontextmanager:[4,1,1,""]},"appyter.ext.asyncio.subprocess":{sh:[4,1,1,""],stream_readline_to_queue:[4,1,1,""]},"appyter.ext.asyncio.test_subprocess":{test_subprocess:[4,1,1,""]},"appyter.ext.asyncio.try_n_times":{async_try_n_times:[4,1,1,""],try_n_times:[4,1,1,""]},"appyter.ext.click":{Json:[5,2,1,""],click_argument_setenv:[5,1,1,""],click_option_setenv:[5,1,1,""]},"appyter.ext.click.Json":{convert:[5,4,1,""],name:[5,3,1,""],split_envvar_value:[5,4,1,""]},"appyter.ext.contextlib":{ContextManagerAsHandle:[3,2,1,""],ensure_context:[3,1,1,""],with_many:[3,1,1,""]},"appyter.ext.contextlib.ContextManagerAsHandle":{close:[3,4,1,""],open:[3,4,1,""]},"appyter.ext.cryptography":{adhoc_ssl_context:[3,1,1,""]},"appyter.ext.dict":{dict_collision_free_update:[3,1,1,""],dict_filter_none:[3,1,1,""],dict_flatten:[3,1,1,""],dict_merge:[3,1,1,""],dict_typed_flatten:[3,1,1,""],dict_typed_unflatten:[3,1,1,""],dict_unflatten:[3,1,1,""],expand_dotmap:[3,1,1,""]},"appyter.ext.emitter":{json_emitter_factory:[3,1,1,""],url_to_emitter:[3,1,1,""]},"appyter.ext.exceptions":{exception_as_dict:[3,1,1,""]},"appyter.ext.flask":{decorator_in_production:[3,1,1,""],is_remote:[3,1,1,""],join_routes:[3,1,1,""],request_get:[3,1,1,""],route_join_with_or_without_slash:[3,1,1,""],secure_filepath:[3,1,1,""],secure_url:[3,1,1,""]},"appyter.ext.fsspec":{chroot:[6,0,0,"-"],core:[6,0,0,"-"],drs:[6,0,0,"-"],fuse:[6,0,0,"-"],mapperfs:[6,0,0,"-"],overlayfs:[6,0,0,"-"],sbfs:[6,0,0,"-"],singleton:[6,0,0,"-"],spec:[7,0,0,"-"],storage:[6,0,0,"-"],util:[6,0,0,"-"],writecache:[6,0,0,"-"]},"appyter.ext.fsspec.chroot":{ChrootFileSystem:[6,2,1,""]},"appyter.ext.fsspec.chroot.ChrootFileSystem":{cat_file:[6,4,1,""],copy:[6,4,1,""],cp_file:[6,4,1,""],exists:[6,4,1,""],get_drs:[6,4,1,""],get_file:[6,4,1,""],info:[6,4,1,""],ls:[6,4,1,""],makedirs:[6,4,1,""],mkdir:[6,4,1,""],mount:[6,4,1,""],mv:[6,4,1,""],protocol:[6,3,1,""],put_file:[6,4,1,""],rm:[6,4,1,""],rm_file:[6,4,1,""],rmdir:[6,4,1,""],root_marker:[6,3,1,""]},"appyter.ext.fsspec.core":{url_to_chroot_fs:[6,1,1,""],url_to_fs_ex:[6,1,1,""]},"appyter.ext.fsspec.drs":{DRSFileSystem:[6,2,1,""]},"appyter.ext.fsspec.drs.DRSFileSystem":{protocol:[6,3,1,""]},"appyter.ext.fsspec.fuse":{fs_mount:[6,1,1,""]},"appyter.ext.fsspec.mapperfs":{MapperFileSystem:[6,2,1,""]},"appyter.ext.fsspec.mapperfs.MapperFileSystem":{cat_file:[6,4,1,""],copy:[6,4,1,""],exists:[6,4,1,""],from_json:[6,4,1,""],get_drs:[6,4,1,""],info:[6,4,1,""],ls:[6,4,1,""],makedirs:[6,4,1,""],mkdir:[6,4,1,""],mv:[6,4,1,""],protocol:[6,3,1,""],rm:[6,4,1,""],rm_file:[6,4,1,""],rmdir:[6,4,1,""],root_marker:[6,3,1,""],to_json:[6,4,1,""]},"appyter.ext.fsspec.overlayfs":{OverlayFileSystem:[6,2,1,""]},"appyter.ext.fsspec.overlayfs.OverlayFileSystem":{cat_file:[6,4,1,""],copy:[6,4,1,""],cp_file:[6,4,1,""],exists:[6,4,1,""],get_drs:[6,4,1,""],get_file:[6,4,1,""],info:[6,4,1,""],ls:[6,4,1,""],makedirs:[6,4,1,""],mkdir:[6,4,1,""],mount:[6,4,1,""],mv:[6,4,1,""],protocol:[6,3,1,""],put_file:[6,4,1,""],rm:[6,4,1,""],rm_file:[6,4,1,""],rmdir:[6,4,1,""],root_marker:[6,3,1,""]},"appyter.ext.fsspec.sbfs":{SBFSBufferedFile:[6,2,1,""],SBFSFileSystem:[6,2,1,""]},"appyter.ext.fsspec.sbfs.SBFSFileSystem":{CHUNK_SIZE:[6,3,1,""],get_drs:[6,4,1,""]},"appyter.ext.fsspec.singleton":{SingletonFileSystem:[6,2,1,""]},"appyter.ext.fsspec.singleton.SingletonFileSystem":{root_marker:[6,3,1,""]},"appyter.ext.fsspec.spec":{composable:[7,0,0,"-"],mountable:[7,0,0,"-"],sync_async:[7,0,0,"-"]},"appyter.ext.fsspec.spec.composable":{ComposableAbstractFileSystem:[7,2,1,""]},"appyter.ext.fsspec.spec.composable.ComposableAbstractFileSystem":{from_json:[7,4,1,""],to_json:[7,4,1,""]},"appyter.ext.fsspec.spec.mountable":{MountableAbstractFileSystem:[7,2,1,""]},"appyter.ext.fsspec.spec.mountable.MountableAbstractFileSystem":{mount:[7,4,1,""]},"appyter.ext.fsspec.spec.sync_async":{SyncAsyncFileSystem:[7,2,1,""]},"appyter.ext.fsspec.spec.sync_async.SyncAsyncFileSystem":{cat_file:[7,4,1,""],cp_file:[7,4,1,""],exists:[7,4,1,""],get_file:[7,4,1,""],glob:[7,4,1,""],info:[7,4,1,""],ls:[7,4,1,""],makedirs:[7,4,1,""],mkdir:[7,4,1,""],mv:[7,4,1,""],put_file:[7,4,1,""],rm:[7,4,1,""],rm_file:[7,4,1,""],rmdir:[7,4,1,""]},"appyter.ext.fsspec.storage":{ensure_storage:[6,1,1,""]},"appyter.ext.fsspec.util":{fsspec_cp:[6,1,1,""],fsspec_read_and_run:[6,1,1,""]},"appyter.ext.fsspec.writecache":{LocalTempFile:[6,2,1,""],WriteCacheFileSystem:[6,2,1,""]},"appyter.ext.fsspec.writecache.LocalTempFile":{cleanup:[6,4,1,""],close:[6,4,1,""],commit:[6,4,1,""],discard:[6,4,1,""]},"appyter.ext.fsspec.writecache.WriteCacheFileSystem":{cat_file:[6,4,1,""],copy:[6,4,1,""],cp_file:[6,4,1,""],exists:[6,4,1,""],get_drs:[6,4,1,""],get_file:[6,4,1,""],info:[6,4,1,""],ls:[6,4,1,""],makedirs:[6,4,1,""],mkdir:[6,4,1,""],mount:[6,4,1,""],mv:[6,4,1,""],protocol:[6,3,1,""],put_file:[6,4,1,""],rm:[6,4,1,""],rm_file:[6,4,1,""],rmdir:[6,4,1,""]},"appyter.ext.functools":{ensure_callable:[3,1,1,""],memcached:[3,1,1,""]},"appyter.ext.hashlib":{hashsum_dict:[3,1,1,""],hashsum_io:[3,1,1,""],hashsum_str:[3,1,1,""],sha1sum_dict:[3,1,1,""],sha1sum_io:[3,1,1,""],sha1sum_str:[3,1,1,""]},"appyter.ext.importlib":{importdir:[3,1,1,""],importdir_deep:[3,1,1,""]},"appyter.ext.io":{async_copyfileobj:[3,1,1,""]},"appyter.ext.itertools":{alist:[3,1,1,""],collapse:[3,1,1,""],ensure_list:[3,1,1,""],one_and_only:[3,1,1,""]},"appyter.ext.json":{try_json_dumps:[3,1,1,""],try_json_loads:[3,1,1,""]},"appyter.ext.nbclient":{NotebookClientIOPubHook:[8,2,1,""]},"appyter.ext.nbclient.NotebookClientIOPubHook":{async_execute_cell:[8,4,1,""]},"appyter.ext.pathlib":{chroot:[9,0,0,"-"]},"appyter.ext.pathlib.chroot":{ChrootPurePosixPath:[9,2,1,""]},"appyter.ext.pathlib.chroot.ChrootPurePosixPath":{join:[9,4,1,""],realpath:[9,4,1,""],relative_to:[9,4,1,""]},"appyter.ext.pytest":{assert_eq:[3,1,1,""],assert_exc:[3,1,1,""],http_serve_ctx:[3,1,1,""]},"appyter.ext.re":{re_full:[3,1,1,""],slugify:[3,1,1,""]},"appyter.ext.socketio":{chunked_emit:[10,0,0,"-"],client:[10,0,0,"-"],forwarding:[10,0,0,"-"],priority_queued_emit:[10,0,0,"-"],server:[10,0,0,"-"]},"appyter.ext.socketio.chunked_emit":{ChunkedEmitMixin:[10,2,1,""]},"appyter.ext.socketio.chunked_emit.ChunkedEmitMixin":{CHUNK_SIZE:[10,3,1,""],emit:[10,4,1,""]},"appyter.ext.socketio.client":{AsyncClient:[10,2,1,""]},"appyter.ext.socketio.client.AsyncClient":{connect:[10,4,1,""]},"appyter.ext.socketio.forwarding":{ForwardingMixin:[10,2,1,""]},"appyter.ext.socketio.forwarding.ForwardingMixin":{emit:[10,4,1,""]},"appyter.ext.socketio.priority_queued_emit":{PriorityQueuedEmitMixin:[10,2,1,""]},"appyter.ext.socketio.priority_queued_emit.PriorityQueuedEmitMixin":{disconnect:[10,4,1,""],emit:[10,4,1,""]},"appyter.ext.socketio.server":{AsyncServer:[10,2,1,""]},"appyter.ext.socketio.server.AsyncServer":{forward:[10,4,1,""],on:[10,4,1,""]},"appyter.ext.subprocess":{interrupt:[3,1,1,""]},"appyter.ext.tempfile":{mktemp:[3,1,1,""],tempdir:[3,1,1,""]},"appyter.ext.urllib":{URI:[3,2,1,""],join_slash:[3,1,1,""],join_url:[3,1,1,""],parent_url:[3,1,1,""],parse_qs_values:[3,1,1,""],url_filename:[3,1,1,""]},"appyter.ext.urllib.URI":{auth:[3,4,1,""],authority:[3,4,1,""],fragment:[3,3,1,""],fragment_join:[3,4,1,""],fragment_name:[3,4,1,""],fragment_parent:[3,4,1,""],fragment_path:[3,4,1,""],fragment_posix_path:[3,4,1,""],fragment_query:[3,4,1,""],fragment_query_ex:[3,4,1,""],fragment_query_string:[3,4,1,""],hostname:[3,3,1,""],join:[3,4,1,""],name:[3,4,1,""],netloc:[3,4,1,""],parent:[3,4,1,""],password:[3,3,1,""],path:[3,3,1,""],port:[3,3,1,""],posix_path:[3,4,1,""],query:[3,4,1,""],query_ex:[3,4,1,""],query_string:[3,3,1,""],scheme:[3,3,1,""],update_fragment_query:[3,4,1,""],update_query:[3,4,1,""],username:[3,3,1,""],with_fragment:[3,4,1,""],with_fragment_path:[3,4,1,""],with_fragment_query:[3,4,1,""],with_fragment_query_string:[3,4,1,""],with_hostname:[3,4,1,""],with_password:[3,4,1,""],with_path:[3,4,1,""],with_port:[3,4,1,""],with_query:[3,4,1,""],with_query_string:[3,4,1,""],with_scheme:[3,4,1,""],with_username:[3,4,1,""]},"appyter.ext.uuid":{generate_uuid:[3,1,1,""],sanitize_sha1sum:[3,1,1,""],sanitize_uuid:[3,1,1,""]},"appyter.ext.watchgod":{watcher:[11,0,0,"-"]},"appyter.ext.watchgod.watcher":{GlobWatcher:[11,2,1,""]},"appyter.ext.watchgod.watcher.GlobWatcher":{should_watch_dir:[11,4,1,""],should_watch_file:[11,4,1,""]},"appyter.fields":{Field:[0,2,1,""],FieldConstraintException:[0,5,1,""],PartialField:[0,2,1,""],build_fields:[0,1,1,""]},"appyter.fields.Field":{args:[0,4,1,""],choices:[0,4,1,""],constraint:[0,4,1,""],field:[0,4,1,""],js_url:[0,4,1,""],prepare:[0,4,1,""],raw_value:[0,4,1,""],render:[0,4,1,""],render_value:[0,4,1,""],safe_value:[0,4,1,""],template:[0,4,1,""],to_click:[0,4,1,""],to_cwl:[0,4,1,""],to_cwl_value:[0,4,1,""],to_jsonschema:[0,4,1,""],value:[0,4,1,""]},"appyter.fields.FieldConstraintException":{as_dict:[0,4,1,""]},"appyter.magic":{init:[0,1,1,""]},"appyter.parse":{nb:[17,0,0,"-"],nbtemplate:[17,0,0,"-"]},"appyter.parse.nb":{nb_from_ipynb_io:[17,1,1,""],nb_from_ipynb_string:[17,1,1,""],nb_from_json:[17,1,1,""],nb_to_ipynb_io:[17,1,1,""],nb_to_ipynb_string:[17,1,1,""],nb_to_json:[17,1,1,""]},"appyter.parse.nbtemplate":{parse_fields_from_nbtemplate:[17,1,1,""]},appyter:{execspec:[1,0,0,"-"],ext:[3,0,0,"-"],fields:[0,0,0,"-"],magic:[0,0,0,"-"],parse:[17,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:exception"},terms:{"1048576":10,"127":3,"5000":[2,3,10],"65536":[3,4],"8192":6,"8888":3,"byte":6,"case":[6,10],"class":[0,1,2,3,4,5,6,7,8,9,10,11],"default":[0,2,3,6,8,10,18,28],"export":[0,25,28],"function":[3,4,10,28],"import":[0,28],"int":[3,6,8],"new":4,"return":[0,3,6,10],"static":[0,6,7,25,28],"true":[0,6,8,10],"var":[3,5],"while":3,For:6,Not:[2,3],The:[0,4,5,6,8,10,28],Use:8,__init__:28,__name__:28,_dirname_:3,_env:0,_global:0,_globals_:3,_http_serv:3,_ls_from_cach:6,_package_:3,_path:9,abil:8,abl:6,about:[3,8],abstractbufferedfil:6,abstractexecutor:[1,2],abstractfilesystem:[6,7],accept:5,access:[6,28],acknowledg:10,across:6,act:10,activ:4,actual:0,add:28,added:28,addit:6,addition:28,adhoc:3,adhoc_ssl_context:3,after:[6,10],agen:3,aggreg:6,agnost:1,aiohttp:[0,29],algo:3,alist:3,all:[0,3,4,6,7,8],allow:[0,6,10,28],allwatch:11,alon:28,alreadi:[4,5,6],also:[3,5,6,28],analog:1,anext:4,ani:[0,4,6,7,10],anoth:6,answer:28,anyth:4,api:2,api_endpoint:2,app:[0,3],applic:[0,28],appropri:10,aprori:6,arg:[0,2,4,6,7,10,11],argument:[4,5,10],arriv:5,as_dict:0,assert:[0,3,28],assert_eq:3,assert_exc:3,assign:8,associ:10,asyn:6,async:[2,3,4,6,8,10,28],async_copyfileobj:3,async_execute_cel:8,async_try_n_tim:4,asynccli:10,asynccontextmanag:4,asyncfilesystem:[6,7],asyncgener:4,asynchron:3,asyncio:[0,3],asyncio_cli:10,asyncio_serv:10,asyncserv:10,atob:[18,21],attempt:10,auth:3,auth_token:2,author:3,autocommit:6,autocompletefield:[18,21],automat:28,avoid:6,await:28,awaitable_ident:4,backend:6,background:10,backward:6,base:[0,1,2,3,4,5,6,7,8,9,10,11],basic:0,befor:3,being:[0,5,8],best:28,between:6,beyond:6,biojupi:[0,18],blacklist:10,blob:[3,6,7],blueprint:[3,18,21,28],bool:[0,6,8],boolfield:[18,21],bootstrap:[0,18],boundari:6,btoa:[18,21],buffer:[4,10],build:0,build_field:0,cach:[3,6],call:[0,3,4,5,6,7,10],callabl:[0,4],callback:10,can:[0,2,6,8,10,28],cannot:[5,6],captur:0,care:3,cat_fil:[6,7],catalog_integr:[0,12],caus:6,cavatica:[0,1,28],cavaticaexecutor:2,cell:[0,8,28],cell_index:8,cell_typ:28,cellexecutionerror:8,cert:3,certain:5,chang:28,chat:10,check:6,checksum:6,choic:[0,28],choicefield:[18,21,28],choos:0,chroot:[0,3,7],chrootfilesystem:6,chrootpureposixpath:9,chunk:[5,10],chunk_siz:[3,4,6,10],chunked_emit:[0,3],chunkedemitmixin:10,circumst:2,classmethod:1,cleanup:6,clear:[4,6],cli:[25,28,29],click:[0,3],click_argument_setenv:5,click_option_setenv:5,client:[0,3,8],close:[3,6],cls:[1,6],code:[0,8,10],code_ev:28,code_exec:28,collaps:3,com:[2,3,28],command:[5,8],commandifi:[0,29],commit:6,common:6,compat:[5,6],complet:10,compos:[3,6],composableabstractfilesystem:[6,7],composit:7,concurr:4,config:2,configur:28,connect:10,connect_handl:10,consid:28,consist:6,constant:[0,25],constraint:0,construct:4,constructor:4,contain:0,content:29,context:[3,4,5,29],contextlib:[0,29],contextmanag:4,contextmanagerashandl:3,convers:28,convert:[3,4,5,10],copi:6,copyfileobj:3,core:[0,3,15,25,29],coro:4,coroutin:10,correct:5,could:6,count:8,cp_file:[6,7],creat:[4,6],create_par:6,create_subprocess_exec:4,cryptographi:[0,29],css:28,ctx:5,current:[5,8],custom:[4,10,28],cwl:[0,2,25],data:[2,4,10],deadlock:4,deal:[3,4],debug:[0,2,28],decor:[0,10],decorator_in_product:3,dedic:4,deep:[3,17],def:10,defer:[6,7],defin:[0,5,6],delet:6,depend:5,depth:6,deriv:0,descript:[0,5,28],descriptionfield:[18,21],deseri:7,detail:6,determin:[6,8],develop:[0,3,25],dict:[0,1,6,8,29],dict_collision_free_upd:3,dict_filter_non:3,dict_flatten:3,dict_merg:3,dict_typed_flatten:3,dict_typed_unflatten:3,dict_unflatten:3,dictionari:[0,6,10],differ:[0,4,6],dir:[2,3],directori:[3,6,9,28],disallow:6,discard:6,disconnect:10,discover:28,dispatch:[0,1,4,15],dispatchexecutor:2,displai:[0,28],div:28,divid:28,docker:[0,1,29],dockerexecutor:2,doe:10,doesn:[3,4,28],don:[6,28],done:4,dot:3,dotenv:28,dotmap:3,driven:[0,28],drs:[0,2,25,29],drs_endpoint:2,drsfilesystem:6,dure:[0,7],each:[4,6],easi:0,easili:0,effect:0,eio:10,either:6,els:6,emit:[4,10],emit_en:10,emitt:[0,4,29],empti:[5,6],enabl:[0,6,28],end:[0,6,28],endless_watch:2,endpoint:[2,10],ensur:[3,4,28],ensure_async:4,ensure_async_contextmanag:4,ensure_async_func:4,ensure_async_gener:4,ensure_async_liter:4,ensure_async_wrapp:4,ensure_cal:3,ensure_context:3,ensure_list:3,ensure_storag:6,ensure_sync:[4,7],ensure_sync_contextmanag:4,ensure_sync_coro:4,ensure_sync_gener:4,ensure_sync_wrapp:4,entri:[6,11],env:[0,17,28],environ:[0,5,10,28],envvar:5,equival:6,error:[2,6],escap:0,establish:10,etc:6,eval:28,event:[4,10],event_emitt:[0,3],event_loop:[0,3],eventemitt:4,eventloopthread:4,evt:10,exactli:6,exampl:[2,10],exc:3,except:[0,6,8,29],exception_as_dict:3,execspec:[0,29],execut:[0,2,4,8,25,28],execution_count:8,executor:[0,1,2,4,12],executor_opt:1,exist:[3,4,6,7,10],exist_ok:6,expand:0,expand_dotmap:3,expans:7,expect:6,expectedexcept:3,expens:6,experi:28,explicitli:5,expr:3,ext:[0,29],extens:[4,6],extern:28,extra:[0,29],extran:3,fail:[5,8],failur:8,fallback:[6,7],fals:[0,2,6,7,8,10,17],fdst:3,featur:28,feel:28,fetch_and_serv:[0,29],field:[18,21,28,29],field_nam:0,fieldconstraintexcept:0,file:[3,6,28],filefield:[18,21],fileinfo:6,filepath:3,filesystem:[6,7],filter:[18,21,28],filter_mod:3,find:6,first:[0,6,10,28],flag:2,flask:[0,28,29],flask_app:[0,25],floatfield:[18,21],flush:4,fmt:[18,21],follow:[0,28],form:[0,28,29],format:28,forward:[0,3],forwardingmixin:10,found:6,fragment:3,fragment_join:3,fragment_nam:3,fragment_par:3,fragment_path:3,fragment_posix_path:3,fragment_q:6,fragment_queri:3,fragment_query_ex:3,fragment_query_str:3,from:[0,3,4,5,6,10,28],from_json:[6,7],front:0,fs_mount:6,fs_path:6,fsrc:3,fsspec:[0,1,3],fsspec_cp:6,fsspec_read_and_run:6,fsspec_uri:28,fstring:28,full:6,func:[3,4],functool:[0,29],fuse:[0,3],futur:4,ga4gh:2,gener:[3,4,6],generate_uuid:3,get:[0,2,4,6,10,28],get_dr:6,get_event_loop:4,get_executor_class:1,get_fil:[6,7],getelementbyid:28,git:28,github:[3,28],give:6,given:[0,5,6,10],glob:7,global:[0,28],globwatch:11,guarante:9,handl:[10,28],handler:[4,10],has:3,hashlib:[0,29],hashsum_dict:3,hashsum_io:3,hashsum_str:3,have:[6,10,28],head:28,header:[2,10],helper:[0,3,7,29],hide:28,histori:8,hook:8,host:[3,28],hostnam:3,http:[2,3,10,28],http_serve_ctx:3,ideal:2,identifi:0,ignor:[5,6],imag:28,img:28,implement:[0,1,6,28],importdir:3,importdir_deep:3,importlib:[0,29],includ:[5,6,10,28],index:28,infinit:6,info:[6,7],inform:6,init:[0,28,29],initi:[0,4,10],inject:0,inner:3,input:[5,6,28],instal:10,instanc:[0,6],instanti:[0,6],instead:28,intern:[0,2],interrupt:3,interven:6,intfield:[18,21,28],invers:6,invok:[4,10,28],iopub:8,ipynb:[0,6,28],ipython:[0,8],is_remot:3,isasynccontextmanag:4,iscontextmanag:4,item:5,iter:3,itertool:[0,29],its:5,itself:6,javascript:4,jinj2:0,jinja2:[0,28],jinja:0,job:[1,2],join:[3,9],join_rout:[3,18,21],join_slash:3,join_url:3,js_url:0,json:[0,5,6,7,10,29],json_emitter_factori:3,jsonifi:[18,21],jsonschema:[0,25],jupyt:[0,28],jupyter_notebook:28,just:[0,8,28],keep:4,kei:[3,6],kernel:8,keyword:4,kube:[0,1],kubernet:2,kubernetesexecutor:2,kwarg:[0,1,2,3,4,5,6,7,8,10,11],label:[0,28],lambda:[0,3,28],languag:0,larg:10,last:28,later:0,latest:2,launch:1,lead:5,leaf:6,leak:2,left_f:6,left_fo:6,length:3,let:6,level:28,like:[3,5,6],limit:[4,6],limitoverrunerror:4,line:[4,5,28],list:[3,5,6,10],listen:4,livereload:[0,25],load:[7,28],local:[0,1,6],localexecutor:2,localhost:10,localtempfil:6,locat:[6,18,21],log:[4,28],logger:10,look:28,loop:4,lower:10,lpath:6,maayanlab:[2,28],magic:[28,29],mai:[3,4,5,6],main:[3,28],make:[0,6,28],makedir:[6,7],manag:[2,4],map:6,mapper:6,mapperf:[0,3],mapperfilesystem:6,markdown:[0,28],max:28,maxdepth:6,mean:5,measur:6,mechan:[3,28],mechann:10,memcach:3,memori:[3,28],mess:2,messag:[0,5,10],message_handl:10,meth:[5,8],method:[4,7,10],might:[3,6],min:28,miss:5,mixin:10,mkdir:[6,7],mkdtemp:3,mktemp:3,mode:[0,6,28],modern:28,modifi:28,modul:[28,29],more:0,most:[2,10],mount:[3,6,7,28],mount_dir:6,mountabl:[3,6],mountableabstractfilesystem:[6,7],move:6,msg:10,multicheckboxfield:[18,21],multichoicefield:[18,21],multipl:6,multipli:28,multiprocess:[0,29],must:[5,6],mydatadir:2,myimag:2,mykei:2,myproject:2,myuser:2,name:[0,1,3,5,6,10,28],namespac:[2,10],nativ:28,nb_from_ipynb_io:17,nb_from_ipynb_str:17,nb_from_json:17,nb_to_ipynb_io:17,nb_to_ipynb_str:17,nb_to_json:17,nbclean:[0,29],nbclient:[0,3],nbconstruct:[0,29],nbexecut:[0,29],nbformat:8,nbinspect:[0,25],nbtemplat:[0,29],nbtemplate_json:[0,25],necessari:[0,10,28],necessarili:6,need:4,neg:6,netloc:3,new_event_loop:4,none:[0,1,2,3,4,5,6,8,10],normal:28,notat:3,note:[10,28],notebook:[0,2,8,12,28],notebookcli:8,notebookclientiopubhook:8,notebooknod:8,number:28,number_1:28,number_2:28,obj:[3,4],object:[0,1,3,4,6,7,8,9,10],occur:10,off:4,omit:10,on_error:6,one:6,one_and_onli:3,onli:[2,4,6],open:[3,6],openapi:[0,25],oper:[3,28],opinion:4,opposit:3,opt:6,option:[0,3,5,6,8,28],orchestr:[0,2,29],order:3,other:[0,5,6,9,28],otherwis:5,our:[0,6,7],output:[0,3,8],overlai:6,overlayf:[0,3],overlayfilesystem:6,overrid:[4,28],overridden:[0,6],own:[6,7,28],packag:[28,29],packet:10,page:28,pallet:3,param:[2,5,10],paramet:[0,5,10],paramtyp:5,parent:3,parent_url:3,pars:[0,1,3,28,29],parse_fields_from_nbtempl:17,parse_qs_valu:3,parse_vari:28,part:3,partial:0,partialfield:0,particular:6,pass:[4,6,10],passthrough:[6,7],password:3,path1:6,path2:6,path:[3,6,7,28],pathlib:[0,3],pathmap:6,payload:[8,10],perform:0,perhap:6,perman:3,permiss:6,pip3:28,pip:28,place:0,platform:1,pleas:28,png:28,point:10,poll:10,pool:4,port:[3,28],posit:[6,8],posix_path:3,possibl:[4,6],potenti:0,power:28,pre:28,prefix:[3,28],prepar:[0,25],preprocess:0,present:6,preserv:3,print:10,prioriti:10,priority_queued_emit:[0,3],priorityqueuedemitmixin:10,proc:3,proceed:3,process:[2,3,6,8],produc:[0,3],product:[0,25,28],production_decor:3,profil:[0,28,29],profile_nam:28,project:2,prompt:5,properti:[0,3],protocol:[1,2,3,6,28],provid:[0,28],prudent:28,publicli:28,pureposixpath:9,purpos:[0,28],put:[0,28],put_fil:[6,7],pyeval:[18,21],pytest:[0,28,29],python3:28,python:[6,28],queri:[3,10],query_ex:3,query_map:3,query_str:3,queu:10,queue:[2,4],rais:[6,8],randomization_factor:10,raw:0,raw_valu:0,re_ful:3,read:6,readi:[0,3],real:6,realpath:9,reason:28,receiv:[0,10],reconnect:10,reconnection_attempt:10,reconnection_delai:10,reconnection_delay_max:10,recreat:6,recurs:6,refer:28,referenc:28,refresh:6,regist:[6,10],register_implement:1,registri:[0,29],reject:10,rel:3,relative_to:9,relev:[0,4],remot:6,remote_addr:10,remov:[3,4,6],render:[0,28,29],render_html:28,render_html_render:28,render_jupyt:28,render_valu:[0,28],replac:0,report:0,repositori:28,repr:0,repres:[0,4],represent:6,req:0,request:[0,3,6,10,12],request_get:3,requir:[0,4,6,10],reserv:10,resolv:3,resourc:28,respect:[4,6],respons:[8,10],result:[6,28],right_f:6,right_fo:6,rm_file:[6,7],rmdir:[6,7],rmtree:3,room_manag:[0,25],root:[3,6,9],root_mark:6,rout:3,route_join_with_or_without_slash:3,rpath:6,run:[0,1,2,4],run_app:3,run_id:2,runtim:0,safe:[0,4],safe_mod:0,safe_valu:0,safeti:3,same:[0,2,3,4,6],sanit:3,sanitize_sha1sum:3,sanitize_uuid:3,satisfi:0,save:6,sbf:[0,3,28],sbfsbufferedfil:6,sbfsfilesystem:6,sbgenom:2,scheme:3,script:28,search:28,second:[10,28],section:0,sectionfield:[18,21],secure_filepath:3,secure_url:3,see:[0,6,8,28],seek:6,select:28,self:6,semi:0,send:10,sequenti:[4,10],serial:[6,7],serv:[0,3,28,29],server:[0,3],servic:2,session:10,set:[0,4,5,10,28],sha1sum_dict:3,sha1sum_io:3,sha1sum_str:3,sharedeventloopthreadpoolexecutor:4,shell:4,shortcut:6,should:[0,4,6,8,10],should_watch_dir:11,should_watch_fil:11,show:28,shutil:3,sid:10,similar:[6,9],simpl:0,sinc:3,singl:[6,8],singleton:[0,3],singletonfilesystem:6,sio:10,situat:5,size:6,skip:6,slash:3,slice:6,slugifi:3,small:5,socket:10,socket_io:10,socketio:[0,3,15,25],socketio_path:10,some:[4,6,10,28],someth:6,sourc:[0,1,2,3,4,5,6,7,8,9,10,11,17],spawn:4,spec:[0,2,3,5,6,29],specif:[0,1,6,8],split:[5,10],split_envvar_valu:5,splitter:5,src:[3,28],ssl:3,ssl_context:3,stai:9,standalon:28,standard:[4,28],start:6,state:2,stderr:4,stdout:4,still:0,stop:4,storag:[0,3,12],storage_arg:7,storage_uri:6,storagefilefield:[18,21],store:8,store_histori:8,str:[0,3,5,6],stream:4,stream_readline_to_queu:4,string:[5,6,10,17,28],stringfield:[18,21,28],stripe:3,structur:[0,6],style:[4,28],subclass:[0,4],subdirectori:6,submit:[2,28],submodul:[12,18,21,29],subpackag:29,subprocess:[0,1,29],subprocessexecutor:2,substitut:28,subtract:28,suffix:3,support:[2,3,6,7,28],sync:[4,7],sync_async:[3,6],syncasyncfilesystem:[6,7],syntax:28,system:6,tabfield:[18,21],take:10,taken:4,target:[4,6],task:0,tbd:6,tempdir:3,tempfil:[0,29],templat:[0,28],temporari:[3,6],test_chroot:[0,3],test_dr:[0,3],test_fus:[0,3],test_fuseless_mount:[0,3],test_help:[0,3],test_mapperf:[0,3],test_overlayf:[0,3],test_pathmap:[0,3],test_sbf:[0,3],test_subprocess:[0,3],text:[6,28],textarea:28,textfield:[18,21,28],textlistfield:[18,21],them:[7,28],thi:[0,2,3,4,5,6,8,10,28],thread:4,threadpoolexecutor:4,time:0,titl:28,tmp:3,to_click:0,to_cwl:0,to_cwl_valu:0,to_json:[6,7],to_jsonschema:0,touch:6,trail:[3,5],transport:10,treat:6,trigger:10,try_json_dump:3,try_json_load:3,try_n_tim:[0,3],turn:[0,28],two:6,type:[0,5,6,28],under:28,underli:6,unintenti:3,unless:6,unlik:[3,4],unsaf:0,until:4,updat:[6,8,28],update_fragment_queri:3,update_queri:3,upgrad:[10,28],upload:[0,6,12,25],uri:[2,3],url:[1,2,3,6,10],url_filenam:3,url_for:[18,21],url_to_chroot_f:6,url_to_emitt:3,url_to_executor:1,url_to_f:6,url_to_fs_ex:6,urllib:[0,29],usag:[0,2,10],use:[0,3,4,6,7,28],used:[0,1,3,6,10,28],user_config:[0,12],userf:[0,12],usernam:3,uses:28,using:[5,28],usual:[5,6],util:[0,3],uuid:[0,29],val:3,valid:[10,28],valu:[0,3,5,6,10,28],variabl:[0,5,28],variablefield:[18,21],variou:28,verbos:0,version:[0,3,6],via:[0,2],virtual:6,wai:[0,28],wait:4,wait_for:2,walk:6,watcher:[0,3],watchgod:[0,3],web:[0,28],webapp:28,webserv:28,websocket:10,well:5,werkzeug:3,wes:[0,1],wes_endpoint:2,wesexecutor:2,when:[0,3,5,6,10,28],where:[6,10],which:[0,2,4,5,6,8],whitespac:5,with_app_run:3,with_event_loop:4,with_frag:3,with_fragment_path:3,with_fragment_queri:3,with_fragment_query_str:3,with_hostnam:3,with_mani:3,with_password:3,with_path:3,with_port:3,with_queri:3,with_query_str:3,with_schem:3,with_usernam:3,withabl:3,within:[6,8,9],without:[4,6],work:[4,6],workflow:2,would:6,write:6,writecach:[0,3],writecachefilesystem:6,wsgi:10,yarl:3,yield:4,you:[0,4,6,28],your:[0,28],your_app:28,your_filt:28,your_imag:28,yourfield:28},titles:["appyter package","appyter.execspec package","appyter.execspec.implementations package","appyter.ext package","appyter.ext.asyncio package","appyter.ext.click package","appyter.ext.fsspec package","appyter.ext.fsspec.spec package","appyter.ext.nbclient package","appyter.ext.pathlib package","appyter.ext.socketio package","appyter.ext.watchgod package","appyter.extras package","appyter.extras.catalog_integration package","appyter.helpers package","appyter.orchestration package","appyter.orchestration.dispatcher package","appyter.parse package","appyter.profiles package","appyter.profiles.biojupies package","appyter.profiles.bootstrap package","appyter.profiles.default package","appyter.profiles.default.blueprints package","appyter.profiles.default.fields package","appyter.profiles.default.filters package","appyter.render package","appyter.render.flask_app package","appyter.render.nbinspect package","Welcome to Ma\u2019ayanlab Appyter\u2019s documentation!","appyter"],titleterms:{"default":[21,22,23,24],"export":26,"static":26,aiohttp:3,appyt:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],assert:9,asyncio:4,atob:24,autocompletefield:23,ayanlab:28,biojupi:19,blueprint:22,boolfield:23,bootstrap:20,btoa:24,catalog_integr:13,cavatica:2,choicefield:23,chroot:[6,9],chunked_emit:10,cli:[0,15,27],click:5,client:10,commandifi:14,compos:7,constant:26,content:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],context:0,contextlib:3,core:[1,6,16,26],creat:28,cryptographi:3,cwl:27,descriptionfield:23,develop:[26,28],dict:3,discuss:28,dispatch:[2,16],docker:[2,14],document:28,drs:[3,6,26],emitt:3,event_emitt:4,event_loop:4,except:3,execspec:[1,2],execut:26,executor:13,ext:[3,4,5,6,7,8,9,10,11],extra:[12,13],fetch_and_serv:14,field:[0,23],filefield:23,filter:24,flask:3,flask_app:26,floatfield:23,fmt:24,form:25,forward:10,fsspec:[6,7],functool:3,fuse:6,hashlib:3,helper:[4,14],implement:2,importlib:3,indic:28,init:14,instal:28,intfield:23,itertool:3,join_rout:24,json:3,jsonifi:24,jsonschema:27,kube:2,livereload:26,local:2,locat:22,magic:0,mapperf:6,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],mountabl:7,multicheckboxfield:23,multichoicefield:23,multiprocess:3,nbclean:14,nbclient:8,nbconstruct:25,nbexecut:25,nbinspect:27,nbtemplat:17,nbtemplate_json:27,notebook:13,openapi:27,orchestr:[15,16],overlayf:6,packag:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],pars:17,pathlib:9,prepar:26,priority_queued_emit:10,product:26,profil:[18,19,20,21,22,23,24],pyeval:24,pytest:3,registri:1,render:[25,26,27],request:13,room_manag:26,sbf:6,sectionfield:23,serv:14,server:10,singleton:6,socketio:[10,16,26],spec:[1,7],storag:[6,13],storagefilefield:22,stringfield:23,submodul:[0,1,2,3,4,6,7,9,10,11,13,14,15,16,17,22,23,24,25,26,27],subpackag:[0,1,3,6,12,15,18,21,25],subprocess:[2,3,4],sync_async:7,tabfield:23,tabl:28,tempfil:3,test:28,test_chroot:6,test_dr:6,test_fus:6,test_fuseless_mount:6,test_help:4,test_mapperf:6,test_overlayf:6,test_pathmap:6,test_sbf:6,test_subprocess:4,textfield:23,textlistfield:23,try_n_tim:4,upload:[13,26],url_for:24,urllib:3,usag:28,user_config:13,userf:13,util:6,uuid:3,variablefield:23,watcher:11,watchgod:11,welcom:28,wes:2,writecach:6}})