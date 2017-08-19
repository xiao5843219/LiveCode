var qr = require('qr-image');

//生成二維碼圖片，并將圖片返回
function createQr(res,text) {
    var code = qr.image(text, { type: 'png', ec_level: 'H', size: 10, margin: 0 });
    res.setHeader('Content-type', 'image/png');
    code.pipe(res);
}

exports.createQr=createQr;