var express = require('express');
var router = express.Router();
var jpush = require('../controller/pushMMCA');

/* GET users listing. */
router.get('/:alert&:tittle&:message&:user', function(req, res, next) {
    jpush.pushMessage(req,function(err,res1){
      if (err) {
              console.log(err.message);
              res.json(err);
          } else {
              console.log('Sendno: ' + res1.sendno);
              console.log('Msg_id: ' + res1.msg_id);
              res.json('seccuss');
          }
    });
});

module.exports = router;