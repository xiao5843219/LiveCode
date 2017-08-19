var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var server=require('http').Server(app);
var io=require('socket.io')(server);
var sqlclient=require('./utils/sqlclient');

var socketsArray = [];

sqlclient.init();//初始化數據庫連接池

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

io.sockets.on('connection',function(socket){//獲取客戶端所有長鏈接
    socketsArray.push(socket);
});

app.use(function(req,res,next){
  res.sockets=socketsArray;
  next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var index = require('./routes/index');
var qr=require('./routes/qr');
var extract =require('./routes/extract');
var push=require('./routes/push');
var pushMsgNotification=require('./routes/pushMMCA');
var test=require('./routes/test');

app.use('/', index);
app.use('/qr',qr);
app.use('/extract',extract);
app.use('/push',push);
app.use('/test',test);
app.use('/pushmsg',pushMsgNotification);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = {app:app,server:server};
