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
var Subscription = require('./routes/Admin');
var app = express();
var busboy = require('connect-busboy');
var PDF = require('./routes/PDF');

app.locals.moment=require("moment");

// For XSS Security 
var helmet = require('helmet')
app.use(helmet())
const config = require('./config/config.js');

// From config Please
var con = mysql.createConnection({
  host: config.mysql_host,
  user: config.mysql_user,
  password: config.mysql_pass,
  database: config.mysql_db
});

global.IP = config.global_ip;

app.use(logger('dev'));
app.use(busboy()); 
app.set('view engine', 'ejs');
app.set('views', './views');
app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/embark', express.static('embark'));
app.get('/embark', (req, res) => {
  res.sendFile(path.join(__dirname, '/embark/index.html'));
});
app.use('/pdf', PDF);
app.use('/ApI',Subscription);
app.use('/auth', Authentication);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
con.connect(function(err) {
  if(err) return console.log(err);
  global.con = con;
  console.log('App Started at Port:'+config.serveport);
})
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === config.appmode ? err : {};

  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
