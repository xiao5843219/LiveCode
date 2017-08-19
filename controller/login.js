var base58=require('base58');
var shorten=require('../db/shorten');
var qrutil=require('./qrutil');

var getRandomInt = function(min, max) { 
       return Math.floor(Math.random() * (max - min)) + min; 
   }; 

function userLogin(req, res, next){
    var data={socketid:req.params.socketid,action:'LOGIN',time:new Date()};
    var hash=base58.encode(getRandomInt(999999, 9999999999999999));
    shorten.insert(hash,data,function(err,data){
        if(err){
           next(err);
        }
        qrutil.createQr(res,'http://10.130.2.227:3000/extract/'+hash);
    });
}

exports.userLogin=userLogin;