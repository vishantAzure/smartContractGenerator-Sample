var express = require('express');
var path = require('path');
var mysql = require('mysql');
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Mailgun = require('mailgun').Mailgun;
var Authentication = require('./routes/Auth');
var app = express();
var busboy = require('connect-busboy');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "vishant@123",
  database: "myapp"
});

app.use(logger('dev'));
app.use(busboy()); 
app.set('view engine', 'pug');
app.set('views', './views');
app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/embark', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.use('/auth', Authentication);
con.connect(function(err) {
  if(err) return console.log(err);
  global.con = con;
  console.log('App Started at Port:'+3000);
})
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
