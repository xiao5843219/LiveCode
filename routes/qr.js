var express = require('express');
var router = express.Router();
var qr = require('qr-image');
var action=require('../controller/action');

router.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });


//二維碼簽核
router.get('/qrsign/:data',function(req, res, next){
    action.saveQrSignAction(req, res, next);
});

//短碼簽核
router.get('/sign/:data',function(req, res, next){
    action.saveSignAction(req, res, next);
});

module.exports = router;