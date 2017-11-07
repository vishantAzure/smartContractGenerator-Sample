var express = require('express');
var router = express.Router();
var crypto=require('crypto');
var Mailgun = require('mailgun').Mailgun;
var mg = new Mailgun('key-001902229d1f3c9beb6653254fa477e2');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);



router.post('/signup', function(req, res) {
    var pwhash = bcrypt.hashSync(req.body.password, salt);
    var ID = crypto.createHash('md5').update(req.body.email+Date.now()).digest('hex');
    var RegistratnVerifyHash = crypto.createHash('md5').update(req.body.phone+req.body.type+Date.now()).digest('hex');
    var ExpireTime = new Date();
    var sql = "INSERT INTO Users (idUsers, Password, Email, Phone, User_Type, Registration_Verify, Verify,last_name, first_name,Status) VALUES ?";
    var values = [
      [ID,pwhash,req.body.email,req.body.phone,req.body.type,RegistratnVerifyHash,false,req.body.lastname, req.body.firstname,'Active'],];

    global.con.query(sql,[values],function(err,result) {
      if(err) return res.status(500).send();

      if(result.affectedRows==1) {
        return res.json({status:200,res:'User Inserted'});
          // mg.sendText('Mailgun Sandbox <postmaster@sandbox0b6d206a885444d5bdd039deb7ed8ab5.mailgun.org>', ['vishant.singh@sofocle.com'],
          // 'Email Verification',
          // 'This is Activation Link'+'/n'+
          // global.IP+'/auth/verifyToken?token='+hash,
          // {},
          //   function(error) {
          //     if (error) return res.status(500).send();
          //     return res.json({status:200,res:'User Inserted'});
          // });
      }else{
        return res.json({status:300});
      }
    });

});

router.post('/forgot', function(req, res) {
  var ForgoftPasswordVerifyHash = crypto.createHash('md5').update(req.body.email+Date.now()).digest('hex');
  var date = new Date();
  var ExpireTime = date.getDate()+2;
  var SQL = 'UPDATE Users SET Forgoft_Password_Verify = ? Expire_date = ? WHERE Email = ?';

  global.con.query(SQL,[ForgoftPasswordVerifyHash, ExpireTime, req.body.email],function(err1,result1) {
    if(err1) return res.status(500).send();
      mg.sendText('Mailgun Sandbox <postmaster@sandbox0b6d206a885444d5bdd039deb7ed8ab5.mailgun.org>', ['vishant.singh@sofocle.com'],
      'Email Verification',
      'This is Change Password Link'+'/n'+
      global.IP+'/auth/verifyChangePassToken?token='+ForgoftPasswordVerifyHash,
        {},
        function(error) {
          if (error) return res.status(500).send();
          return res.json({status:200,res:'Verification Email Has been Sent'});
      });
  });
});

router.post('/changepass', function(req, res) {

  if(req.body.id) {

    var sql = 'SELECT Password FROM Users WHERE idUsers = ?'

    global.con.query(sql,[req.body.id],function(err,result) {
      if(err) return res.status(500).send();

      if(result.length > 0) {
        bcrypt.compare(req.body.password, result[0].Password, function(err1, result1) {
          if(result1==true) {
            var sql = 'UPDATE Users SET Password = ? WHERE idUsers = ?';
            global.con.query(sql,[req.body.NewPass,req.body.id],function(err2,result2) {
              if(err2) return res.status(500).send();

              if(result.affectedRows==1) {
                return res.json({status:200,res:'Password Changed'});
              }else{
                return res.json({status:300,res:'Try Again'});
              }
            });
          }else{
            return res.json({status:300,res:'Password do not match'});
          }
        });
      }else{
        return res.json({status:300,res:'No Result Found'});
      }
    });
  }else if(req.body.hash){

    var sql = 'UPDATE Users SET Password = ? WHERE Hash = ?';

    bcrypt.hash(req.body.pass, saltRounds, function(err, hash) {
      if(err) return res.status(500).send();

      global.con.query(sql,[hash,req.body.hash],function(err1,result1) {
        if(err1) return res.status(500).send();

        if(result.affectedRows==1) {
          return res.json({status:200,res:result1});
        }else{
          return res.json({status:300,res:'Password Do Not Match'});
        }

      });

    });
  }
});


router.get('/verifyChangePassToken', function(req, res, next) {

  var sql = "SELECT Expire_date FROM Users WHERE Hash = ? AND Verify = ?";

  global.con.query(sql, [req.query.token,'false'], function (err, result, fields) {

    if (err) return res.json({status:300,res:err});
    if(result.length>0) {
      var now = new Date();
      var then = new Date(result[0].Expire_date);
      if(now.getTime()>then.getTime()) {
        var SQL = "UPDATE Users SET Verify = ? WHERE Hash = ? AND Verify = ?";
        global.con.query(SQL, ['true',req.query.token,'false'], function (err1, result1, fields1) {
          if (err1) return res.json({status:300,res:err1});
          return res.render('index', {value:req.query.token});
        });
      }else{
        return res.json({status:300,res:'Token Expired'});
      }
    }else{
      return res.json({status:300,res:'No Matching Data Found'});
    }
  });
});

router.get('/verifyToken', function(req, res, next) {

  var sql = "SELECT Expire_date FROM Users WHERE Registration_Verify = ?";
  global.con.query(sql, [req.query.token], function (err, result, fields) {

    if (err) return res.json({status:300,res:err});

    if(result.length>0) {
      var now = new Date();
      var then = new Date(result[0].Expire_date);

      if(now.getTime()>then.getTime()) {
        var SQL = "UPDATE Users SET Verify = true WHERE Registration_Verify = ?";
        global.con.query(SQL, [req.query.token], function (err1, result1, fields1) {
          
          if (err) return res.render('verify', {param1: err});
          return res.render('verify', { param1:'Token Verified'});
        });
        
      }else{
        return res.render('verify', { param1:'Token Expired'});
      }
    }
  });
});


router.post('/login', function(req, res) {

  var sql = 'SELECT * FROM Users WHERE Email = ? AND Status = ?';

    global.con.query(sql,[req.body.email,'Active'],function(err,result) {

    if(err) return res.status(500).send();
    if(result.length>0) {
      if(bcrypt.compareSync(req.body.password, result[0].Password)) {
        return res.json({status:200,res:result});
      }else{
        return res.json({status:300,res:'Email Or Password Do Not Match'});
      }
    }else{
      return res.json({status:300});
    }
  });

});

router.post('/company', function(req, res) {

  var sql = 'SELECT * FROM Users WHERE User_Type = ? AND Status = ?';

    global.con.query(sql,['Company','Active'],function(err,result) {
    if(err) return res.status(500).send();
    
    return res.json({status:200,res:result});
  });
});

router.post('/serviceProvider', function(req, res) {

  var sql = 'SELECT * FROM Users WHERE User_Type = ? AND Status = ?';

    global.con.query(sql,['Service_Provider','Active'],function(err,result) {
    if(err) return res.status(500).send();

    return res.json({status:200,res:result});
  });
});

router.post('/customer', function(req, res) {

  var sql = 'SELECT * FROM Users WHERE User_Type = ? AND Status = ?';

  global.con.query(sql,['Customer','Active'],function(err,result) {
  if(err) return res.status(500).send();

  return res.json({status:200,res:result});
});
});

router.post('/delete', function(req, res) {

  var sql = 'UPDATE Users SET Status = ? WHERE idUsers = ?;'
  var values = [['InActive',req.body.id],];

  global.con.query(sql,[values],function(err,result) {
  if(err) return res.status(500).send();

  if(result.affectedRows==1) {

    return res.json({status:200,res:result});
  }else{

    return res.json({status:300,res:result});
  }
  
});
});


router.post('/update', function(req, res) {

  var sql = "UPDATE Users SET Email = ?, Phone = ?, first_name = ?  WHERE idUsers = ?";

  global.con.query(sql,[req.body.Email,req.body.Phone,req.body.first_name,req.body.idUsers],function(err,result) {
  if(err) return res.status(500).send();

  if(result.affectedRows==1) {

    return res.json({status:200,res:result});
  }else{
    
    return res.json({status:300,res:result});
  }
});
});


router.post('/ProfileUpdate', function(req, res) {

  var sql = "UPDATE Users SET last_name = ?, Email = ?, Phone = ?, first_name = ?  WHERE idUsers = ?";

  global.con.query(sql,[req.body.lastname,req.body.Email,req.body.Phone,req.body.first_name,req.body.idUsers],function(err,result) {
  if(err) return res.status(500).send();

  if(result.affectedRows==1) {

    return res.json({status:200,res:result});
  }else{
    
    return res.json({status:300,res:result});
  }
  
});
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
      if(err) return res.status(500).send();
      else return res.json({status:200,res:result});
    })
  });
});

router.get('/download', function(req, res, next) {
  var sql = "SELECT * FROM Documents";
  global.con.query(sql, function (err, result, fields) {
    if (err) return res.status(500).send();
    var doc = new Buffer(result[0].document, 'base64');
    res.setHeader("Content-Type","application/force-download");
    res.setHeader("Content-Transfer-Encoding", "binary");
    res.setHeader("Content-Disposition","attachment; filename=\"" + "Doc\"");
    res.write(doc, 'binary');
    res.end();
  });
});

module.exports = router;
