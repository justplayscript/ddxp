# 叮咚买菜自动领取脚本
新用户可以扫码注册,有几十块新人红包
![image](https://github.com/justplayscript/ddxp/blob/main/img0.jpg)

建议手动抓包.    
anyproxy我抓取不到相关连接,QX可以自测看看是否能抓到.    
手动抓包签到后搜索关键词"https://farm.api.ddxq.mobi/api/v2/task/achieve?api_version=*&app_client_id=*&station_id=*&native_version=*&app_version=*&uid=*&latitude=*&longitude=*&gameId=*&taskCode=* ",将整段url存在变量ddxpurl中    
整串连接应该是类似于"/task/achieve?&station_id=*&uid=*&latitude=*&longitude=*",这几个参数是关键    
然后同个连接下的ck存在ddxphd中就能跑脚本了.    
翻牌默认十次全翻完(基本是赚的),不想翻完的可以通过ddxpffl设置次数    
多账号的用@分割,或者去脚本中修改变量即可
