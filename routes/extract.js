var express = require('express');
var router = express.Router();
var extract=require('../controller/extract');

/* 使用短碼獲取長碼 */
router.get('/:hash', extract.extract);

module.exports = router;
