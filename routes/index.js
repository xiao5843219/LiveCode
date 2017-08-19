var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('welcome', {tittle: '歡迎使用MinMaxCA服務'});
});

module.exports = router;
