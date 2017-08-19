var shorten=require('../db/shorten');
var qrutil=require('./qrutil');

/*返回二维码*/
function saveQrSignAction(req, res, next){
    var signData=JSON.parse(req.params.data);
    shorten.insert(signData,function(err,hash){
        if(err){
           next(err);
        }
        qrutil.createQr(res,hash);
    });
}

/* 返回短码 */
function saveSignAction(req, res, next){
    var signData=JSON.parse(req.params.data);
    shorten.insert(signData,function(err,hash){
        if(err){
           next(err);
        }
        res.send(hash);
    });
}

module.exports={saveQrSignAction,saveSignAction};