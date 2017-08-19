var express = require('express');
var router = express.Router();
var extract=require('../controller/extract');

/* GET home page. */
router.post('/', function(req, res, next){
    for(var i=0;i<res.sockets.length;i++){
        if(res.sockets[i].id===req.body.callback.socketid){               
            res.sockets[i].volatile.emit('notification', req.body.data);
            res.json({result:req.body.data});
        }
    }
});

module.exports = router;