var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function (req, res, next) {
    res.render('testlogin', {tittle: 'MinMaxCA testing...'});
});

router.get('/sign', function (req, res, next) {
    var data={
        "action": "sign",
        "callback":{"socketid": "socketid",
                    "type":"qr"},
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
    res.render('testsign', {data:data,dataStr:JSON.stringify(data)});
});

module.exports = router;