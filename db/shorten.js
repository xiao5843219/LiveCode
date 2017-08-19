var sqlclient=require('../utils/sqlclient');
var base58=require('base58');

//生成隨機的短碼
var getRandomInt = function(min, max) { 
       return Math.floor(Math.random() * (max - min)) + min; 
   }; 

//將短碼及待簽核數據保存至數據庫
function insert(data,callback){
     data.time=new Date();
     var hash=base58.encode(getRandomInt(999999, 9999999999999999));//随机生成短码
     sqlclient.queryData('insert into shorten set ?',{hash:hash,data:JSON.stringify(data) ,time:new Date()},function(err,rows){
        callback(err,hash);
    });
}

//依據短碼查詢該條數據詳情
function select(hash,callback){
    sqlclient.queryData('select data from shorten where hash=?',[hash],function(err,rows){
        callback(err,rows);
    });
}

module.exports={insert,select};