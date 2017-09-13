var express = require('express');
var router = express.Router();
var crypto=require('crypto');
var Mailgun = require('mailgun').Mailgun;
var mg = new Mailgun('key-001902229d1f3c9beb6653254fa477e2');

router.post('/signup', function(req, res) {
  var hash = crypto.createHash('md5').update('vishant'+Date.now()).digest('hex');
  var ExpireTime = new Date();
  var sql = "INSERT INTO Users (name, email, password, phone, type, hash, expire) VALUES ?";
  var values = [
    [req.body.name, req.body.email, req.body.password, req.body.phone, req.body.type, hash, ExpireTime],
  ];
  global.con.query(sql,[values],function(err,result) {
    if(err) return res.send(err);
    mg.sendText('Mailgun Sandbox <postmaster@sandbox0b6d206a885444d5bdd039deb7ed8ab5.mailgun.org>', ['vishant.singh@sofocle.com'],
    'Email Verification',
    'This is Activation Link'+'/n'+
    'http://172.18.0.1:3000/auth/verifyToken?token='+hash,
     {},
      function(error) {
        if (error) return res.send( error);
        else   return res.send('user inserted');
    });
  });
});


router.get('/verifyToken', function(req, res, next) {
  var sql = "SELECT expire FROM users WHERE hash = ?";
  global.con.query(sql, [req.query.token], function (err, result, fields) {
    if (err) return res.send(err);
    var now = new Date();
    var then = new Date(result[0].expire);
    if(now.getTime()>then.getTime()) {
      return res.render('index', { title: 'Token', message: 'Token Expired!' });
    }else{
      return res.render('index', { title: 'Token', message: 'http://localhost:4200/login' });
    }
  });
});


router.post('/login', function(req, res) {
  var sql = 'SELECT * FROM users WHERE password = ? AND email = ? AND type = ?';
    global.con.query(sql,[req.body.password,req.body.email,req.body.type],function(err,result) {
    if(err) return res.send(err);
    return res.send(result);
  });
});

router.post('/upload', function(req, res, next) {
  var fileData;
  var Value;
  req.pipe(req.busboy);
  req.busboy.on('field', function(key, value, keyTruncated, valueTruncated) {
      Value = JSON.parse(value);
  });
  req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      let chunks = [];
      file.on('data', function(chunk) {
          chunks.push(chunk);
      });
      file.on('end', function() {
          fileData = Buffer.concat(chunks);
      });
  });
  req.busboy.on('finish', function() {
    var sql = "INSERT INTO Documents (Doc) VALUES ?";
    global.con.query(sql,fileData,function(err,result) {
      if(err) return res.send(err);
      else return res.send(result);
    })
  });
});

router.get('/download', function(req, res, next) {
  var sql = "SELECT * FROM Documents";
  global.con.query(sql, function (err, result, fields) {
    if (err) return res.send(err);
    var doc = new Buffer(result[0].document, 'base64');
    res.setHeader("Content-Type","application/force-download");
    res.setHeader("Content-Transfer-Encoding", "binary");
    res.setHeader("Content-Disposition","attachment; filename=\"" + "Doc\"");
    res.write(doc, 'binary');
    res.end();
  });
});

module.exports = router;
