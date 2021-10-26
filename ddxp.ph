# APP:叮咚买菜
自行在应用商城下载.
包含:每日签到积分,鱼塘果园准点签到等等所有功能,自动喂鱼,自动施肥,自动浇水功能(后续考虑增加自动抢无门槛券功能)

V2P订阅地址:https://raw.githubusercontent.com/justplayscript/ddxp/main/ddxpTask.json
青龙订阅地址: ql repo https://github.com/justplayscript/ddxp.git

## 需要手动抓包两个参数
1.鱼塘签到 搜索关键词"https://farm.api.ddxq.mobi/api/v2/task/achieve" 
抓取整段连接,如:"https://farm.api.ddxq.mobi/api/v2/task/achieve?api_version=*&app_client_id=*&station_id=*&native_version=*&app_version=*&uid=*&latitude=*&longitude=*&gameId=*&taskCode=* " 将整段url存在变量ddxpurl中
2.同个连接下的ck存在ddxphd
多账号的用@分割

自动浇水需要设置变量ddxpjs为true,自动喂鱼需要设置变量ddxpwy为ture,默认不浇水喂鱼.

新用户可以扫码注册可领优惠券.
![](https://raw.githubusercontent.com/justplayscript/ddxp/main/img1.jpg)