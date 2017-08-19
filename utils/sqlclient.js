var sqlclient=module.exports;

var pool=null;

exports.init=function (){
    if(!pool)
    pool = require('./mysql-pool').createMysqlPool();
}

exports.queryData=function(sqlStr,params,callback){
    pool.getConnection(function(err,connection){
        if(err){
            console.log(err);
        }
        connection.query(sqlStr,params,function(err,rows){
            callback(err,rows);
            connection.release();
        });
    });
}

exports.shutDown=function(){
    pool.end();
}