exports.createMysqlPool=function(){
        console.log('pool is created');
        return require('mysql').createPool({
                connectionLimit:100,
                host: process.env.LIVECODE_DB_HOST,
                user: process.env.LIVECODE_DB_USER,//userid
                password:process.env.LIVECODE_DB_PASSWORD, //put your own mysql pwd
                database: process.env.LIVECODE_DB_NAME, //put your database name
                port: 3306,
                acquireTimeout:6000
        });
}


