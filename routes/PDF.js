var express = require('express');
var router = express.Router();
var crypto=require('crypto');
var pdfFiller = require('pdffiller');
var sourcePDF = "public/data.fdf";
var fs = require('fs');
var PDFDocument = require('pdfkit');
var _ = require('lodash');
var destinationPDF =  "test_complete.pdf";

router.post('/CreateTemplate', function(req, res) {
    var str1 = 'This independent contractor agreement (the “Agreement”) is made and entered into as of'+
    '#ContractName#! (the “Effective Date”) between'+'#ContractEmail#! (the “Company”),a #ContractPrice#!'+'#ContractDate#!'+
    'perform other services in the future; and'+'The Parties therefore agree as follows:';
    let myStr = str1 + req.body.Description;
    var templateID = crypto.createHash('md5').update(req.body.categoryName+req.body.Name+Date.now()).digest('hex');
    var sql = "INSERT INTO Templates (idTemplate, Template_Name, Description, Category_Name, Status) VALUES ?";
    var values = [[templateID,req.body.Name,myStr,req.body.categoryName,req.body.status],];

    global.con.query(sql,[values],function(err,result) {
        if(err) return res.status(500).send();

        let abc = myStr.split("!");
        sql = "INSERT INTO TEMPLATE_INPUT (IDTemplate, INPUT_FIELD) VALUES ?";
        for(let i=0;i<abc.length;i++) {
            Match(abc[i]).then(function(str){
                var values = [
                    [templateID,str],
                  ];
                global.con.query(sql,[values],function(err1,result1) {
                if(err1) return res.status(500).send();
                return;
                });
            });
        }return res.json({status:200,res:'Done'});
    });
});

router.post('/UpdateTemplate', function(req, res) {
    var sql = 'UPDATE Templates SET Template_Name = ?, Category_Name = ?, Status = ?, Description = ? WHERE idTemplate = ?';
    global.con.query(sql,[req.body.Name, req.body.categoryName ,req.body.status, req.body.Description , req.body.id],function(err,result) {
        if(err) return res.send(err);

        if(result.affectedRows==1) {
        return res.json({status:200,res:result});
        }else{
        return res.json({status:300,res:result});
        }
    });
});

router.post('/DeleteTemplate', function(req, res) {
    var sql = 'UPDATE Templates SET Status = ?,WHERE idTemplate = ?';
    var values = [[req.body.id,0],];

    global.con.query(sql,[values],function(err,result) {
      if(err) return res.status(500).send();

       if(result.affectedRows==1) {
        return res.json({status:200,res:result});
        }else{
        return res.json({status:300,res:result});
        }
    });
});

router.get('/getTemplates', function(req, res) {
    var sql = "SELECT * FROM Templates WHERE Status = ?";
    var values = [[1],];

    global.con.query(sql,[values],function(err,result) {
      if(err) return res.status(500).send();

      if(result.length>0) {
        return res.json({status:200,res:result});
      }else{
        return res.json({status:300,res:result});
      }
    });
});

// /////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/getInputs', function(req, res) {
    var sql = "SELECT * FROM TEMPLATE_INPUT WHERE IDTemplate = ? ";
    var values = [[req.body.TempID],];

    global.con.query(sql,[values],function(err,result) {
      if(err) return res.status(500).send();

       if(result.length>0) {
        return res.json({status:200,res:result});
      }else{
        return res.json({status:300,res:result});
      }
    });
});

router.post('/preview', function(req, res) {
    var sql = "SELECT Description FROM Templates WHERE idTemplate = ? ";
    var values = [[req.body.ID.TemplateID],];

    global.con.query(sql,[values],function(err1,result1) {
        if(err1) return res.json({status:500,res:err1});
        var sql = "SELECT INPUT_FIELD FROM TEMPLATE_INPUT WHERE IDTemplate = ? ";

        if(result1.length>0) {
            global.con.query(sql,[values],function(err2,result2) {
                if(err2) return res.json({status:500,res:err2});

                if(result2.length>0) {
                    let str = result1[0].Description;
                    let str2;

                    for(var i=0;i<req.body.fields.length;i++) {
                        for(var j=0;j<result2.length;j++) {
                            if(result2[j].INPUT_FIELD==req.body.fields[i].INPUT_FIELD) {
                                var abc = str.replace('#'+result2[j].INPUT_FIELD+'#!', req.body.fields[i].Value_Input);
                                str = abc;
                            }
                        }
                    }

                    for(var i=0;i<req.body.milestone.length;i++) {

                        var ABC = 'Milestone Work Execution :'+req.body.milestone[i].WorkExecution
                        +'Milestone Schedule :'+req.body.milestone[i].Schedule
                        +'Milestone Fees :'+req.body.milestone[i].Fees
                        +'Milestone Penalties :'+req.body.milestone[i].Penalties
                        +'Milestone Taxes :'+req.body.milestone[i].Taxes
                        +'Milestone Start Date :'+req.body.milestone[i].StartDate
                        +'Milestone End Date :'+req.body.milestone[i].EndDate;

                        str2 = str2+ABC;
                    }
                    return res.json({status:200,res:str+str2});
                }
            });
        }
    });
});

router.post('/createPDF', function(req, res) {
    var sql = "SELECT Description FROM Templates WHERE idTemplate = ? ";
    var values = [[req.body.ID.TemplateID],];

    global.con.query(sql,[values],function(err1,result1) {
        if(err1) return res.json({status:500,res:err1});
        var sql = "SELECT INPUT_FIELD FROM TEMPLATE_INPUT WHERE IDTemplate = ? ";

        if(result1.length>0) {
            global.con.query(sql,[values],function(err2,result2) {
                if(err2) return res.json({status:500,res:err2});

                if(result2.length>0) {
                    let str = result1[0].Description;
                    let str2;

                    for(var i=0;i<req.body.fields.length;i++) {
                        for(var j=0;j<result2.length;j++) {
                            if(result2[j].INPUT_FIELD==req.body.fields[i].INPUT_FIELD) {
                                var abc = str.replace('#'+result2[j].INPUT_FIELD+'#!', req.body.fields[i].Value_Input);
                                str = abc;
                            }
                        }
                    }

                    for(var i=0;i<req.body.milestone.length;i++) {

                        var ABC = 'Milestone Work Execution :'+req.body.milestone[i].WorkExecution
                        +'Milestone Schedule :'+req.body.milestone[i].Schedule
                        +'Milestone Fees :'+req.body.milestone[i].Fees
                        +'Milestone Penalties :'+req.body.milestone[i].Penalties
                        +'Milestone Taxes :'+req.body.milestone[i].Taxes
                        +'Milestone Start Date :'+req.body.milestone[i].StartDate
                        +'Milestone End Date :'+req.body.milestone[i].EndDate;

                        str2 = str2+ABC;
                    }
                    GeneratePdf(str , str2).then(function(response) {
                        
                        var sql = "SELECT first_name , last_name FROM Users WHERE Email = ?"
                        var values = [[req.body.ID.CustomerEmail],];

                        global.con.query(sql,[values],function(err5,result5) {
                            if(err5) return res.send(err5);
                           
                            var sql = "INSERT INTO ContractPDF (Customer_Name, ContractPDF_ID, Contract_Name, Contract_StartDate, Contract_Price, USER_ID) VALUES ?";
                            var values = [[result5[0].first_name, response,req.body.ID.ContractName, req.body.ID.ContractDate, req.body.ID.ContractPrice, req.body.ID.UID],];
    
                            global.con.query(sql,[values],function(err3,result3) {
                                if(err3) return res.send(err3);
                                console.log(result3);
    
                                if(result3.affectedRows==1) {
    
                                    for(var i=0;i<req.body.milestone.length;i++) {
    
                                        var sql = "INSERT INTO Milestones (id,Start_Date, End_Date, Contract_ID, Task_Status, Payment_Status, Contract_Name, Customer_Name, Milestone_fee, Milestone_schedule, Milestone_Work_execution) VALUES ?";
                                        var values = [[req.body.milestone[i].ID, req.body.milestone[i].StartDate, req.body.milestone[i].EndDate, response, 0, 0, req.body.ID.ContractName, 'Customer', req.body.milestone[i].Fees, req.body.milestone[i].Schedule, req.body.milestone[i].WorkExecution],];
                                        
                                        global.con.query(sql,[values],function(err4,result4) {
                                            if(err4) return res.send(err4);
                                            
                                            if(result4.affectedRows==1) {
                                                return res.json({status:200,res:result4});
                                            }
                                            
                                        });
                                    }
                                    
                                }else{
                                    return res.json({status:300,res:result3});
                                }
                            });

                        });
                        
                    });
                }else{
                    return res.json({status:300,res:result2});
                }
            });
        }else{
            return res.json({status:300,res:result1});
        }
        
    });
});

router.post('/Milestones', function(req, res) {
    var sql = "SELECT * FROM Milestones WHERE Contract_ID = ?";
    var values = [[req.body.id],];

    global.con.query(sql,[values],function(err,result) {
        if(err) return res.json({status:500,res:err});

        if(result.length>0) {
            return res.json({status:200,res:result});
        }else{
            return res.json({status:300,res:result});
        }
    });
});


router.post('/milestoneComplete', function(req, res) {
    var sql = 'UPDATE Milestones SET Task_Status = ? WHERE Contract_ID = ?';

    global.con.query(sql,[1,req.body.id],function(err,result) {
      if(err) return res.send(err);

       if(result.affectedRows==1) {
        return res.json({status:200,res:result});
        }else{
        return res.json({status:300,res:result});
        }
    });
});




router.post('/pdfs', function(req, res) {
    var sql = "SELECT * FROM ContractPDF WHERE USER_ID = ?";
    var values = [[req.body.id],];

    global.con.query(sql,[values],function(err,result) {
        if(err) return res.json({status:500,res:err});

        if(result.length>0) {
            return res.json({status:200,res:result});
        }else{
            return res.json({status:300,res:result});
        }
    });
});

router.get('/DownloadPDF', function(req, res) {
    var filePath = __dirname+'/../'+req.param('pname');
    var stat = fs.statSync(filePath);
    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Length': stat.size
    });
    var readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

module.exports = router;

// //////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////  FUNCTION    ////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

var GeneratePdf = function (str,str2) {
    return new Promise(function(resolve,reject){
        var doc = new PDFDocument;
        var name = crypto.createHash('md5').update(Date.now()+'').digest('hex');
        writeStream = fs.createWriteStream(name+'.pdf');
        doc.pipe(writeStream);
        doc.image(__dirname+'/../public/assets/images/header.jpg',0,1,{width:610,height:100});
        doc.fontSize(30).text('Services Contract', 50, 120);
        doc.fontSize(15).text(str, {
        width: 410,
        align: 'center'
        });
        doc.addPage()
        .text(str2, {
        width: 410,
        align: 'center'
        });
        doc.image(__dirname+'/../public/assets/images/footer.jpg',0,doc.page.height-100,{width:610,height:100});
        doc.end();
        writeStream.on('finish', function () {
        resolve(name);
        });
  });
  }

  var Match = function (str) {
    return new Promise(function(resolve,reject){
        let STRING = str.match('#(.*)#');
        resolve(STRING[1]);
    });
  }