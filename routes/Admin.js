var express = require('express');
var router = express.Router();
var crypto=require('crypto');
var path = require('path');
var crypto=require('crypto');
var fs = require('fs');
var Mailgun = require('mailgun').Mailgun;
var PDFDocument = require('pdfkit');
var mg = new Mailgun('key-001902229d1f3c9beb6653254fa477e2');

router.post('/AdminManageSubscription', function(req, res) {
    var sql = "INSERT INTO Subscriptions (packageName, packagePrice, numberOfContract, renewalFrequency) VALUES ?";
    var values = [[req.body.packageName, req.body.packagePrice, req.body.numberOfContract, req.body.renewalFrequency],];

    global.con.query(sql,[values],function(err,result) {
      if(err) return res.status(500).send();

      if(result.affectedRows==1) {
        return res.json({status:200,res:result});
      }else{
        return res.json({status:300,res:result});
      }

    });
});


router.post('/AdminviewSubscription', function(req, res) {
  var sql = 'SELECT * FROM Subscriptions WHERE Status = ?;'
  var values = [['Active'],];

  global.con.query(sql,[values],function(err,result) {
    if(err) return res.status(500).send();

      if(result.length>0) {
        return res.json({status:200,res:result});
      }else{
        return res.json({status:300,res:result});
      }
  });
});


router.post('/AdminDeleteSubscription', function(req, res) {
  var sql = 'UPDATE Subscriptions SET Status = ? WHERE idSubscriptions = ?';
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

router.post('/AdminUpdateSubscription', function(req, res) {
  var sql = 'UPDATE Subscriptions SET packageName = ?, packagePrice = ?, numberOfContract = ?, renewalFrequency = ? WHERE idSubscriptions = ?';
  global.con.query(sql,[req.body.packageName, req.body.packagePrice ,req.body.numberOfContract ,req.body.renewalFrequency, req.body.id],function(err,result) {
    if(err) return res.status(500).send();
    
    if(result.affectedRows==1) {
      return res.json({status:200,res:result});
    }else{
      return res.json({status:300,res:result});
    }

  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// Manage Ctegory /////////////////////////////////////////////////////////

router.post('/addCategory', function(req, res) {
  var sql = "INSERT INTO TemplateCategory (Category_Name, Parent_Category, Status, Icon) VALUES ?";
  var values = [[req.body.Name,req.body.parentCategory,req.body.status,req.body.icon],];

  global.con.query(sql,[values],function(err,result) {
    if(err) return res.status(500).send();
    
    if(result.affectedRows==1) {
      return res.json({status:200,res:result});
    }else{
      return res.json({status:300,res:result});
    }

  });
});


router.post('/addParentCategory', function(req, res) {
  var sql = "INSERT INTO TemplateParentCategory (Category_Name, Status, Icon) VALUES ?";
  var values = [[req.body.Name,req.body.status,req.body.icon],];

  global.con.query(sql,[values],function(err,result) {
    if(err) return res.status(500).send();
    
    if(result.affectedRows==1) {
      return res.json({status:200,res:result});
    }else{
      return res.json({status:300,res:result});
    }

  });
});

router.post('/editCategory', function(req, res) {
  var sql = "UPDATE TemplateCategory SET  Category_Name = ?, Parent_Category = ?, Status = ?, Icon = ? WHERE idTemplateCategory = ?";
  global.con.query(sql,[req.body.Name,req.body.parentCategory,req.body.status,req.body.icon,req.body.id],function(err,result) {
    if(err) return res.status(500).send();
    
    if(result.affectedRows==1) {
      return res.json({status:200,res:result});
    }else{
      return res.json({status:300,res:result});
    }
  });
});

router.post('/DeleteCategory', function(req, res) {
  var sql = "UPDATE TemplateCategory SET Status = ? WHERE idTemplateCategory = ?";
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

router.post('/retrieveCategory', function(req, res) {
  var sql = 'SELECT * FROM TemplateCategory WHERE Status = ?;'
  var values = [['Active'],];

  global.con.query(sql,[values],function(err,result) {
    if(err) return res.status(500).send();

      if(result.length>0) {
        return res.json({status:200,res:result});
      }else{
        return res.json({status:300,res:result});
      }

  });
});

router.post('/retrieveParentCategory', function(req, res) {
  var sql = 'SELECT * FROM TemplateParentCategory;'
  
  global.con.query(sql,[],function(err,result) {
    if(err) return res.status(500).send();

      if(result.length>0) {
        return res.json({status:200,res:result});
      }else{
        return res.json({status:300,res:result});
      }

  });
});

module.exports = router;
