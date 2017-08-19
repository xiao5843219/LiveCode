var shorten=require('../db/shorten');

function extract(req, res, next){
    shorten.select(req.params.hash,function(err,rows){
        if(err){
            next(err);
        }
        if(rows[0]){
            res.end(rows[0].data);
        }else{
            res.end("0");
        }
    });
}

exports.extract=extract;