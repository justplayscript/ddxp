/*
自动抢券
[task_local]
59 59 23 * * * https://raw.githubusercontent.com/justplayscript/ddxp/main/ddxpcoupons.js, tag=自动抢券, enabled=true
配置变量 ddxpquan 为 3 5 8 15 抢不同券
配置变量 ddxpquanyc 设置延迟(防黑) 默认1000ms,建议1000-3000都可以,基本能抢到
*/

const $ = new Env('叮咚自动抢券');
const _0x2258=['call','prizeName','length','done','dayLimit','自动抢券','env','http','runScript','.$1','cwd','timeout','null','replace','POST','msg',',\x20错误!','got','\x0a恭喜你,抢到了','ddxpquan','push','isLoon','exec','set-cookie','setCookieSync','Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_7_1\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148\x20xzone/9.35.1\x20station_id/','floor','getSeconds','startTime','getval','log','openUrl','open-url','index','name','activityId','initGotEnv','parse','object','ckjar','*/*','isNeedRewrite','==============📣系统通知📣==============','getFullYear','logs','time','then','data','https://gw.api.ddxq.mobi/promocore-service/client/maicai/mcActivityTrigger/v1/trigger','box.dat','isMute','mediaUrl','9.38.1','headers','ddxpquanyc','-------------\x20共','toObj','@chavy_boxjs_userCfgs.httpapi_timeout','getjson','post','zh-cn','getHours','prizeValue','url','getScript','&native_version=9.40.0&city_number=1103&latitude=','Content-Length','&bizNo=','substr','path','setdata','opts','join','code','POINT_BUY_TICKET','catch','https://activity.m.ddxq.mobi/','status','statusCode','getMinutes','@chavy_boxjs_userCfgs.httpapi','prizeInfo','outerInfo','readFileSync','application/json;charset=UTF-8','split','resolve','Content-Type',',将于','setHours','latitude','existsSync','exports','logErr','undefined','dataFile','getMonth','lodash_set','loaddata','valueForKey','prizes','getdata','send','cron','writeFileSync','个账号-------------\x0a','lodash_get','station_id','test','setval','cookieJar','isSurge','isNode','stringify','map','body','GET','fetch','get','referer','media-url','string','getMilliseconds','assign','now','isQuanX','logSeparator','setValueForKey'];const _0x5230=function(_0x225881,_0x5230ec){_0x225881=_0x225881-0x0;let _0x2490fa=_0x2258[_0x225881];return _0x2490fa;};const $=new Env(_0x5230('0x5'));const dr='@';let ddxpurlArr=[],ddxphdArr=[],ddxpcount='';let time=Math['round'](Date[_0x5230('0x7c')]()/0x3e8);let ddxpurl=$['getdata']('ddxpurl');let ddxphd=$['getdata']('ddxphd');let ddxpquan=$[_0x5230('0x65')](_0x5230('0x13'));let ddxpquanyc=$[_0x5230('0x65')](_0x5230('0x36'));let uid='';let latitude='';let longitude='';let station_id='';let userTaskLogId='';let activityId=null;let sendtime=0x0;let lesstime=0x0;let userTasks=[];!(async()=>{ddxpurlArr=(ddxpurl||'')['split'](dr);ddxphdArr=(ddxphd||'')['split'](dr);ddxpquanyc=+(ddxpquanyc||0x3e8);console[_0x5230('0x1e')](_0x5230('0x37')+ddxphdArr[_0x5230('0x2')]+_0x5230('0x69'));for(let _0x11bc0e=0x0;_0x11bc0e<ddxphdArr[_0x5230('0x2')];_0x11bc0e++){if(ddxphdArr[_0x11bc0e]){getUrl(ddxpurlArr[_0x11bc0e]);ddxphd=ddxphdArr[_0x11bc0e];$[_0x5230('0x21')]=_0x11bc0e+0x1;console['log']('\x0a开始【叮咚抢券'+$[_0x5230('0x21')]+'】');await ddxpgetquan();await $['wait'](lesstime);await ddxpqq();}}})()[_0x5230('0x4b')](_0x2ac5e1=>$['logErr'](_0x2ac5e1))['finally'](()=>$['done']());function pubHeader(){return{'accept':_0x5230('0x28'),'cookie':ddxphd,'accept-language':_0x5230('0x3c'),'user-agent':_0x5230('0x19')+station_id,'accept-encoding':'gzip,\x20deflate,\x20br'};}function getUrl(_0x14fb7a){let _0x2e01c7=_0x14fb7a['split']('?');let _0x4b9bf0=_0x2e01c7[_0x2e01c7['length']-0x1][_0x5230('0x55')]('&');let _0x225a45={};for(const _0x1297d4 of _0x4b9bf0){let _0x4118bb=_0x1297d4['split']('&');for(const _0x5d3323 of _0x4118bb){let _0x441c8d=_0x5d3323['split']('=');_0x225a45[_0x441c8d[0x0]]=_0x441c8d[0x1];}}uid=_0x225a45['uid'];latitude=_0x225a45[_0x5230('0x5a')];longitude=_0x225a45['longitude'];station_id=_0x225a45[_0x5230('0x6b')];}function ddxpgetquan(_0x1da37f=0x0){return new Promise(_0x1bb8a8=>{let _0x2e78ed=pubHeader();_0x2e78ed['origin']='https://activity.m.ddxq.mobi';_0x2e78ed[_0x5230('0x77')]='https://activity.m.ddxq.mobi/';_0x2e78ed['Content-Type']=_0x5230('0x54');let _0x9f0aa6={'url':'https://gw.api.ddxq.mobi/promocore-service/client/maicai/mcActivityClient/v1/listByStationId','headers':_0x2e78ed,'body':{'api_version':'9.7.3','app_client_id':0x3,'app_version':'1.0.0','biz_type':_0x5230('0x4a'),'city_number':'1103','latitude':latitude,'longitude':longitude,'native_version':_0x5230('0x34'),'station_id':station_id}};$[_0x5230('0x3b')](_0x9f0aa6,async(_0x337415,_0x1bf466,_0x2651f5)=>{try{const _0x9b5a4d=JSON['parse'](_0x2651f5);if(_0x9b5a4d['code']==0x0){for(const _0x1ecbd0 of _0x9b5a4d[_0x5230('0x2f')]){let _0x327984=_0x1ecbd0[_0x5230('0x64')][0x0];if(+_0x327984[_0x5230('0x52')][_0x5230('0x3e')]==ddxpquan){console[_0x5230('0x1e')]('\x0a'+_0x327984[_0x5230('0x22')]+'每天'+_0x327984['extendInfo'][_0x5230('0x4')]+'个,如果一直抢不到建议抢个数多的');activityId=_0x327984[_0x5230('0x23')];console['log']('\x0aactivityId:'+activityId);let _0x4bdea0=new Date()[_0x5230('0x59')](0x0,0x0,0x0,0x0)+0x5265c00;let _0x580298=Date['now']();sendtime=_0x4bdea0;lesstime=_0x4bdea0-_0x580298;if(ddxpquanyc>0x0){lesstime+=ddxpquanyc;}console['log']('\x0a现在时间为'+_0x580298+_0x5230('0x58')+lesstime+'毫秒后开抢');break;}}}else{console[_0x5230('0x1e')](_0x9b5a4d);}}catch(_0x518c1e){}finally{_0x1bb8a8();}},_0x1da37f);});}let testNum=0x0;function ddxpqq(_0xd67fd7=0x0){return new Promise(_0x369aab=>{let _0x2af9f5=pubHeader();_0x2af9f5['origin']='https://activity.m.ddxq.mobi';_0x2af9f5['referer']=_0x5230('0x4c');_0x2af9f5['Content-Type']='application/x-www-form-urlencoded';let _0x2a3093=Date[_0x5230('0x7c')]();let _0x3eccc8={'url':_0x5230('0x30'),'headers':_0x2af9f5,'body':'api_version=9.7.3&app_version=1.0.0&app_client_id=3&station_id='+station_id+_0x5230('0x41')+latitude+'&longitude='+longitude+'&activityId='+activityId+_0x5230('0x43')+_0x2a3093};console['log'](_0x3eccc8['body']);$[_0x5230('0x3b')](_0x3eccc8,async(_0x485c28,_0x3a8537,_0x183eba)=>{try{const _0x510057=JSON[_0x5230('0x25')](_0x183eba);if(_0x510057[_0x5230('0x49')]==0x0&&_0x510057['prizeSendRecords']!=null&&_0x510057['prizeSendRecords']['length']>0x0){for(const _0x4daf0e of _0x510057['data']['prizeSendRecords']){console['log'](_0x5230('0x12')+_0x4daf0e['extendInfo'][_0x5230('0x51')][_0x5230('0x1')]);$[_0x5230('0xf')]($[_0x5230('0x22')],'','\x0a恭喜你,抢到了'+_0x4daf0e['extendInfo']['prizeInfo'][_0x5230('0x1')]);}}else{console[_0x5230('0x1e')]('\x0a'+_0x510057['msg']);}console['log']('\x0a'+_0x183eba);}catch(_0x3daff5){}finally{_0x369aab();}},_0xd67fd7);});}function Env(_0x527b9a,_0x22f133){class _0x10dd56{constructor(_0x52b1db){this['env']=_0x52b1db;}[_0x5230('0x66')](_0x1d05cb,_0x22cf78=_0x5230('0x74')){_0x1d05cb='string'==typeof _0x1d05cb?{'url':_0x1d05cb}:_0x1d05cb;let _0x1a2ba0=this['get'];return'POST'===_0x22cf78&&(_0x1a2ba0=this[_0x5230('0x3b')]),new Promise((_0x1dfc87,_0x358084)=>{_0x1a2ba0[_0x5230('0x0')](this,_0x1d05cb,(_0x3d3234,_0x4d98ab,_0x5312b7)=>{_0x3d3234?_0x358084(_0x3d3234):_0x1dfc87(_0x4d98ab);});});}[_0x5230('0x76')](_0x5484dd){return this['send']['call'](this[_0x5230('0x6')],_0x5484dd);}['post'](_0x359ae6){return this[_0x5230('0x66')][_0x5230('0x0')](this[_0x5230('0x6')],_0x359ae6,_0x5230('0xe'));}}return new class{constructor(_0x1b9cbe,_0x370093){this[_0x5230('0x22')]=_0x1b9cbe,this[_0x5230('0x7')]=new _0x10dd56(this),this[_0x5230('0x2f')]=null,this[_0x5230('0x5f')]=_0x5230('0x31'),this[_0x5230('0x2c')]=[],this[_0x5230('0x32')]=!0x1,this['isNeedRewrite']=!0x1,this['logSeparator']='\x0a',this[_0x5230('0x1c')]=new Date()['getTime'](),Object[_0x5230('0x7b')](this,_0x370093),this[_0x5230('0x1e')]('','🔔'+this['name']+',\x20开始!');}[_0x5230('0x70')](){return _0x5230('0x5e')!=typeof module&&!!module[_0x5230('0x5c')];}[_0x5230('0x7d')](){return _0x5230('0x5e')!=typeof $task;}['isSurge'](){return _0x5230('0x5e')!=typeof $httpClient&&_0x5230('0x5e')==typeof $loon;}[_0x5230('0x15')](){return _0x5230('0x5e')!=typeof $loon;}[_0x5230('0x38')](_0xed68d7,_0x2680b5=null){try{return JSON[_0x5230('0x25')](_0xed68d7);}catch{return _0x2680b5;}}['toStr'](_0x4e4c30,_0x24b2a2=null){try{return JSON[_0x5230('0x71')](_0x4e4c30);}catch{return _0x24b2a2;}}[_0x5230('0x3a')](_0x1c393e,_0x4d0ec9){let _0xb51d06=_0x4d0ec9;const _0x429186=this[_0x5230('0x65')](_0x1c393e);if(_0x429186)try{_0xb51d06=JSON['parse'](this[_0x5230('0x65')](_0x1c393e));}catch{}return _0xb51d06;}['setjson'](_0xf0c195,_0x4c1ca0){try{return this[_0x5230('0x46')](JSON['stringify'](_0xf0c195),_0x4c1ca0);}catch{return!0x1;}}[_0x5230('0x40')](_0x36da37){return new Promise(_0x4ac251=>{this['get']({'url':_0x36da37},(_0x2a8870,_0x3c863d,_0x24041c)=>_0x4ac251(_0x24041c));});}[_0x5230('0x8')](_0x3ad708,_0x11ae54){return new Promise(_0x43f32a=>{let _0x180779=this[_0x5230('0x65')](_0x5230('0x50'));_0x180779=_0x180779?_0x180779[_0x5230('0xd')](/\n/g,'')['trim']():_0x180779;let _0x13d795=this[_0x5230('0x65')](_0x5230('0x39'));_0x13d795=_0x13d795?0x1*_0x13d795:0x14,_0x13d795=_0x11ae54&&_0x11ae54[_0x5230('0xb')]?_0x11ae54[_0x5230('0xb')]:_0x13d795;const [_0x315787,_0x453505]=_0x180779[_0x5230('0x55')]('@'),_0x4549f9={'url':'http://'+_0x453505+'/v1/scripting/evaluate','body':{'script_text':_0x3ad708,'mock_type':_0x5230('0x67'),'timeout':_0x13d795},'headers':{'X-Key':_0x315787,'Accept':'*/*'}};this[_0x5230('0x3b')](_0x4549f9,(_0x54f8c6,_0x509357,_0x542000)=>_0x43f32a(_0x542000));})[_0x5230('0x4b')](_0xb5db29=>this['logErr'](_0xb5db29));}['loaddata'](){if(!this[_0x5230('0x70')]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x5230('0x45')]=this[_0x5230('0x45')]?this['path']:require('path');const _0x3c4c7b=this[_0x5230('0x45')][_0x5230('0x56')](this['dataFile']),_0x2a6c45=this['path']['resolve'](process[_0x5230('0xa')](),this[_0x5230('0x5f')]),_0x1bae8b=this['fs']['existsSync'](_0x3c4c7b),_0x540539=!_0x1bae8b&&this['fs'][_0x5230('0x5b')](_0x2a6c45);if(!_0x1bae8b&&!_0x540539)return{};{const _0x5d06d2=_0x1bae8b?_0x3c4c7b:_0x2a6c45;try{return JSON[_0x5230('0x25')](this['fs'][_0x5230('0x53')](_0x5d06d2));}catch(_0x19ff31){return{};}}}}['writedata'](){if(this[_0x5230('0x70')]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x5230('0x45')]=this['path']?this['path']:require('path');const _0x101ebd=this['path'][_0x5230('0x56')](this['dataFile']),_0xc23683=this['path'][_0x5230('0x56')](process[_0x5230('0xa')](),this['dataFile']),_0x2bed2d=this['fs'][_0x5230('0x5b')](_0x101ebd),_0x485c17=!_0x2bed2d&&this['fs']['existsSync'](_0xc23683),_0x1420c1=JSON[_0x5230('0x71')](this['data']);_0x2bed2d?this['fs'][_0x5230('0x68')](_0x101ebd,_0x1420c1):_0x485c17?this['fs'][_0x5230('0x68')](_0xc23683,_0x1420c1):this['fs']['writeFileSync'](_0x101ebd,_0x1420c1);}}[_0x5230('0x6a')](_0x40066f,_0x46c017,_0x1632e8){const _0x3f5651=_0x46c017['replace'](/\[(\d+)\]/g,_0x5230('0x9'))['split']('.');let _0xb44311=_0x40066f;for(const _0x43176c of _0x3f5651)if(_0xb44311=Object(_0xb44311)[_0x43176c],void 0x0===_0xb44311)return _0x1632e8;return _0xb44311;}['lodash_set'](_0x528382,_0x4f0106,_0x2a0ee7){return Object(_0x528382)!==_0x528382?_0x528382:(Array['isArray'](_0x4f0106)||(_0x4f0106=_0x4f0106['toString']()['match'](/[^.[\]]+/g)||[]),_0x4f0106['slice'](0x0,-0x1)['reduce']((_0x52696e,_0x3122dd,_0x54fb0d)=>Object(_0x52696e[_0x3122dd])===_0x52696e[_0x3122dd]?_0x52696e[_0x3122dd]:_0x52696e[_0x3122dd]=Math['abs'](_0x4f0106[_0x54fb0d+0x1])>>0x0==+_0x4f0106[_0x54fb0d+0x1]?[]:{},_0x528382)[_0x4f0106[_0x4f0106[_0x5230('0x2')]-0x1]]=_0x2a0ee7,_0x528382);}['getdata'](_0x284e71){let _0x3f02b9=this[_0x5230('0x1d')](_0x284e71);if(/^@/['test'](_0x284e71)){const [,_0x246537,_0x3193f0]=/^@(.*?)\.(.*?)$/[_0x5230('0x16')](_0x284e71),_0x38627d=_0x246537?this['getval'](_0x246537):'';if(_0x38627d)try{const _0x1aab27=JSON['parse'](_0x38627d);_0x3f02b9=_0x1aab27?this[_0x5230('0x6a')](_0x1aab27,_0x3193f0,''):_0x3f02b9;}catch(_0x35cb5c){_0x3f02b9='';}}return _0x3f02b9;}[_0x5230('0x46')](_0x2314ce,_0x56d820){let _0x40de90=!0x1;if(/^@/[_0x5230('0x6c')](_0x56d820)){const [,_0x238605,_0xbaf6c4]=/^@(.*?)\.(.*?)$/['exec'](_0x56d820),_0x1f2541=this[_0x5230('0x1d')](_0x238605),_0x2408c8=_0x238605?_0x5230('0xc')===_0x1f2541?null:_0x1f2541||'{}':'{}';try{const _0x230d18=JSON[_0x5230('0x25')](_0x2408c8);this[_0x5230('0x61')](_0x230d18,_0xbaf6c4,_0x2314ce),_0x40de90=this[_0x5230('0x6d')](JSON['stringify'](_0x230d18),_0x238605);}catch(_0x432073){const _0xf5d26f={};this['lodash_set'](_0xf5d26f,_0xbaf6c4,_0x2314ce),_0x40de90=this[_0x5230('0x6d')](JSON['stringify'](_0xf5d26f),_0x238605);}}else _0x40de90=this['setval'](_0x2314ce,_0x56d820);return _0x40de90;}[_0x5230('0x1d')](_0x1dd69d){if(this[_0x5230('0x70')]()){return process[_0x5230('0x6')][_0x1dd69d];}else{return this['isSurge']()||this[_0x5230('0x15')]()?$persistentStore['read'](_0x1dd69d):this[_0x5230('0x7d')]()?$prefs[_0x5230('0x63')](_0x1dd69d):this[_0x5230('0x70')]()?(this['data']=this[_0x5230('0x62')](),this['data'][_0x1dd69d]):this[_0x5230('0x2f')]&&this[_0x5230('0x2f')][_0x1dd69d]||null;}}['setval'](_0x4493cc,_0x51772d){return this[_0x5230('0x6f')]()||this[_0x5230('0x15')]()?$persistentStore['write'](_0x4493cc,_0x51772d):this['isQuanX']()?$prefs[_0x5230('0x7f')](_0x4493cc,_0x51772d):this['isNode']()?(this['data']=this[_0x5230('0x62')](),this['data'][_0x51772d]=_0x4493cc,this['writedata'](),!0x0):this[_0x5230('0x2f')]&&this[_0x5230('0x2f')][_0x51772d]||null;}[_0x5230('0x24')](_0x7de49d){this[_0x5230('0x11')]=this['got']?this['got']:require(_0x5230('0x11')),this['cktough']=this['cktough']?this['cktough']:require('tough-cookie'),this['ckjar']=this[_0x5230('0x27')]?this['ckjar']:new this['cktough']['CookieJar'](),_0x7de49d&&(_0x7de49d['headers']=_0x7de49d[_0x5230('0x35')]?_0x7de49d[_0x5230('0x35')]:{},void 0x0===_0x7de49d['headers']['Cookie']&&void 0x0===_0x7de49d[_0x5230('0x6e')]&&(_0x7de49d[_0x5230('0x6e')]=this[_0x5230('0x27')]));}[_0x5230('0x76')](_0x58efba,_0x8833a2=()=>{}){_0x58efba['headers']&&(delete _0x58efba['headers'][_0x5230('0x57')],delete _0x58efba['headers'][_0x5230('0x42')]),this[_0x5230('0x6f')]()||this['isLoon']()?(this[_0x5230('0x6f')]()&&this[_0x5230('0x29')]&&(_0x58efba[_0x5230('0x35')]=_0x58efba['headers']||{},Object['assign'](_0x58efba['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['get'](_0x58efba,(_0x3df190,_0x1a692c,_0x2a8649)=>{!_0x3df190&&_0x1a692c&&(_0x1a692c['body']=_0x2a8649,_0x1a692c['statusCode']=_0x1a692c['status']),_0x8833a2(_0x3df190,_0x1a692c,_0x2a8649);})):this['isQuanX']()?(this['isNeedRewrite']&&(_0x58efba[_0x5230('0x47')]=_0x58efba['opts']||{},Object[_0x5230('0x7b')](_0x58efba[_0x5230('0x47')],{'hints':!0x1})),$task[_0x5230('0x75')](_0x58efba)['then'](_0x4d0c4f=>{const {statusCode:_0x5c36b9,statusCode:_0xd90079,headers:_0x383815,body:_0x4f3b53}=_0x4d0c4f;_0x8833a2(null,{'status':_0x5c36b9,'statusCode':_0xd90079,'headers':_0x383815,'body':_0x4f3b53},_0x4f3b53);},_0x38da67=>_0x8833a2(_0x38da67))):this[_0x5230('0x70')]()&&(this[_0x5230('0x24')](_0x58efba),this['got'](_0x58efba)['on']('redirect',(_0x512d55,_0x28b47a)=>{try{if(_0x512d55[_0x5230('0x35')][_0x5230('0x17')]){const _0x2d45c7=_0x512d55['headers']['set-cookie'][_0x5230('0x72')](this['cktough']['Cookie'][_0x5230('0x25')])['toString']();this['ckjar'][_0x5230('0x18')](_0x2d45c7,null),_0x28b47a[_0x5230('0x6e')]=this['ckjar'];}}catch(_0xe01b17){this[_0x5230('0x5d')](_0xe01b17);}})[_0x5230('0x2e')](_0x559c74=>{const {statusCode:_0x176191,statusCode:_0x174892,headers:_0x1954df,body:_0x5bde6d}=_0x559c74;_0x8833a2(null,{'status':_0x176191,'statusCode':_0x174892,'headers':_0x1954df,'body':_0x5bde6d},_0x5bde6d);},_0x3e056d=>{const {message:_0x13ed11,response:_0x2a734c}=_0x3e056d;_0x8833a2(_0x13ed11,_0x2a734c,_0x2a734c&&_0x2a734c['body']);}));}[_0x5230('0x3b')](_0x531f91,_0x41a277=()=>{}){if(_0x531f91[_0x5230('0x73')]&&_0x531f91[_0x5230('0x35')]&&!_0x531f91[_0x5230('0x35')][_0x5230('0x57')]&&(_0x531f91[_0x5230('0x35')][_0x5230('0x57')]='application/x-www-form-urlencoded'),_0x531f91[_0x5230('0x35')]&&delete _0x531f91[_0x5230('0x35')][_0x5230('0x42')],this[_0x5230('0x6f')]()||this[_0x5230('0x15')]())this['isSurge']()&&this['isNeedRewrite']&&(_0x531f91[_0x5230('0x35')]=_0x531f91['headers']||{},Object['assign'](_0x531f91[_0x5230('0x35')],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['post'](_0x531f91,(_0x37faa8,_0x2ab33d,_0x32eed2)=>{!_0x37faa8&&_0x2ab33d&&(_0x2ab33d['body']=_0x32eed2,_0x2ab33d[_0x5230('0x4e')]=_0x2ab33d[_0x5230('0x4d')]),_0x41a277(_0x37faa8,_0x2ab33d,_0x32eed2);});else if(this['isQuanX']())_0x531f91['method']=_0x5230('0xe'),this['isNeedRewrite']&&(_0x531f91['opts']=_0x531f91['opts']||{},Object['assign'](_0x531f91['opts'],{'hints':!0x1})),$task['fetch'](_0x531f91)[_0x5230('0x2e')](_0x43b648=>{const {statusCode:_0x3a4556,statusCode:_0x2e8ac5,headers:_0x3a97f5,body:_0x4dc05b}=_0x43b648;_0x41a277(null,{'status':_0x3a4556,'statusCode':_0x2e8ac5,'headers':_0x3a97f5,'body':_0x4dc05b},_0x4dc05b);},_0x500b46=>_0x41a277(_0x500b46));else if(this['isNode']()){this['initGotEnv'](_0x531f91);const {url:_0x50611f,..._0x20cc7b}=_0x531f91;this[_0x5230('0x11')]['post'](_0x50611f,_0x20cc7b)['then'](_0x1bd287=>{const {statusCode:_0x27ddb1,statusCode:_0x2164f9,headers:_0x18ddbb,body:_0x65851}=_0x1bd287;_0x41a277(null,{'status':_0x27ddb1,'statusCode':_0x2164f9,'headers':_0x18ddbb,'body':_0x65851},_0x65851);},_0x46e949=>{const {message:_0x548523,response:_0x59338c}=_0x46e949;_0x41a277(_0x548523,_0x59338c,_0x59338c&&_0x59338c['body']);});}}[_0x5230('0x2d')](_0x35b9c5){let _0xe22207={'M+':new Date()['getMonth']()+0x1,'d+':new Date()['getDate'](),'H+':new Date()[_0x5230('0x3d')](),'m+':new Date()[_0x5230('0x4f')](),'s+':new Date()[_0x5230('0x1b')](),'q+':Math[_0x5230('0x1a')]((new Date()[_0x5230('0x60')]()+0x3)/0x3),'S':new Date()[_0x5230('0x7a')]()};/(y+)/[_0x5230('0x6c')](_0x35b9c5)&&(_0x35b9c5=_0x35b9c5[_0x5230('0xd')](RegExp['$1'],(new Date()[_0x5230('0x2b')]()+'')['substr'](0x4-RegExp['$1']['length'])));for(let _0x542a9c in _0xe22207)new RegExp('('+_0x542a9c+')')['test'](_0x35b9c5)&&(_0x35b9c5=_0x35b9c5[_0x5230('0xd')](RegExp['$1'],0x1==RegExp['$1'][_0x5230('0x2')]?_0xe22207[_0x542a9c]:('00'+_0xe22207[_0x542a9c])[_0x5230('0x44')]((''+_0xe22207[_0x542a9c])[_0x5230('0x2')])));return _0x35b9c5;}[_0x5230('0xf')](_0x1a7d59=_0x527b9a,_0x42c655='',_0x301bba='',_0x164978){const _0x14eac9=_0xa5f3d4=>{if(!_0xa5f3d4)return _0xa5f3d4;if(_0x5230('0x79')==typeof _0xa5f3d4)return this['isLoon']()?_0xa5f3d4:this[_0x5230('0x7d')]()?{'open-url':_0xa5f3d4}:this['isSurge']()?{'url':_0xa5f3d4}:void 0x0;if(_0x5230('0x26')==typeof _0xa5f3d4){if(this['isLoon']()){let _0x53dd2f=_0xa5f3d4['openUrl']||_0xa5f3d4['url']||_0xa5f3d4[_0x5230('0x20')],_0x5149e9=_0xa5f3d4[_0x5230('0x33')]||_0xa5f3d4[_0x5230('0x78')];return{'openUrl':_0x53dd2f,'mediaUrl':_0x5149e9};}if(this['isQuanX']()){let _0x15126d=_0xa5f3d4['open-url']||_0xa5f3d4[_0x5230('0x3f')]||_0xa5f3d4['openUrl'],_0x6f12a7=_0xa5f3d4[_0x5230('0x78')]||_0xa5f3d4[_0x5230('0x33')];return{'open-url':_0x15126d,'media-url':_0x6f12a7};}if(this[_0x5230('0x6f')]()){let _0x57824b=_0xa5f3d4[_0x5230('0x3f')]||_0xa5f3d4[_0x5230('0x1f')]||_0xa5f3d4['open-url'];return{'url':_0x57824b};}}};this['isMute']||(this['isSurge']()||this['isLoon']()?$notification['post'](_0x1a7d59,_0x42c655,_0x301bba,_0x14eac9(_0x164978)):this[_0x5230('0x7d')]()&&$notify(_0x1a7d59,_0x42c655,_0x301bba,_0x14eac9(_0x164978)));let _0x299437=['',_0x5230('0x2a')];_0x299437[_0x5230('0x14')](_0x1a7d59),_0x42c655&&_0x299437['push'](_0x42c655),_0x301bba&&_0x299437['push'](_0x301bba),console[_0x5230('0x1e')](_0x299437[_0x5230('0x48')]('\x0a')),this['logs']=this[_0x5230('0x2c')]['concat'](_0x299437);}[_0x5230('0x1e')](..._0x4751e6){_0x4751e6[_0x5230('0x2')]>0x0&&(this[_0x5230('0x2c')]=[...this[_0x5230('0x2c')],..._0x4751e6]),console[_0x5230('0x1e')](_0x4751e6['join'](this[_0x5230('0x7e')]));}['logErr'](_0x5dad2f,_0x4ad4e5){const _0x1954be=!this['isSurge']()&&!this[_0x5230('0x7d')]()&&!this['isLoon']();_0x1954be?this['log']('','❗️'+this['name']+',\x20错误!',_0x5dad2f['stack']):this[_0x5230('0x1e')]('','❗️'+this[_0x5230('0x22')]+_0x5230('0x10'),_0x5dad2f);}['wait'](_0x100075){return new Promise(_0x12c31a=>setTimeout(_0x12c31a,_0x100075));}[_0x5230('0x3')](_0x58bf7f={}){const _0x340df7=new Date()['getTime'](),_0x11100f=(_0x340df7-this['startTime'])/0x3e8;this['log']('','🔔'+this['name']+',\x20结束!\x20🕛\x20'+_0x11100f+'\x20秒'),this[_0x5230('0x1e')](),(this[_0x5230('0x6f')]()||this['isQuanX']()||this[_0x5230('0x15')]())&&$done(_0x58bf7f);}}(_0x527b9a,_0x22f133);}
