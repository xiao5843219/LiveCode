var JPush = require("jpush-sdk")
var client = JPush.buildClient('appkey', 'appsecret')
var shorten=require('../db/shorten');

    /*
    极光推送API
    @pram alert:通知内容
    @pram tittle:标题
    @pram message:消息内容
    @pram user:接收消息的设备别名 */
    exports.pushMessage=function(req,callback){
        message=JSON.stringify(data);
        client.push().setPlatform('ios', 'android')
            .setAudience(JPush.alias(req.params.user))
            .setNotification(JPush.ios(req.params.alert), JPush.android(req.params.alert,req.params.tittle,1))
            .setMessage(message)
            .setOptions(null, 60)
            .send(function(err, res){
                callback(err,res);
        });
        /*
        var s=JSON.stringify(message);
        shorten.insert(JSON.parse(s),function(err,hash){//将待签核的数据保存至LiveCode资料库，返回短码推送给移动客户端
            
        });*/

    };

    var data={
        "action": "sign",
        "callback":{"socketid": "socketid",
                    "type":"push"},
        "data":{"certificate": "F3232181",
            "sign": [
                     {
                         "pdfID": "201680b9-3580-00d8-a590-99b9ecbb395f",
                         "signfield": "sign1"
                     },
                     {
                         "pdfID": "2016893c-db20-0560-bd3d-794387ed3b91",
                         "signfield": "sign1"
                     },
                     {
                         "pdfID": "20168586-410a-0279-96c8-0084724d6278",
                         "signfield": "sign1"
                     }
                     ]
                },
        "jsonVersion": "1.0",
        "appkey": "378ccd05d87ddfb20c996929",
        "appsecret ": "3241ddaf76c513990cb197ee"};
