var express = require('express');
var router = express.Router();
var crypto=require('crypto');
var pdfFiller = require('pdffiller');
var sourcePDF = "public/data.fdf";
var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./demo.html', 'utf8');
var options = { format: 'Letter' };
var PDFDocument = require('pdfkit');
var _ = require('lodash');
var Model = require('../model');


router.post('/CreateTemplate', function(req, res) {
    var str1 = 'This independent contractor agreement (the “Agreement”) is made and entered into as of'+
    '#ContractName#! (the “Effective Date”) between'+'#ContractEmail#! (the “Company”),a #ContractPrice#!'+'#ContractDate#!'+
    'perform other services in the future; and'+'The Parties therefore agree as follows:';
    let myStr = str1 + req.body.Description;
    var sql = "INSERT INTO Templates (Template_Name, Description, Category_Name, Status) VALUES ?";
    var values = [[req.body.Name,myStr,req.body.categoryName,req.body.status],];

    global.con.query(sql,[values],function(err,result) {
        if(err) return res.send(err);

        let abc = myStr.split("!");
        sql = "INSERT INTO TEMPLATE_INPUT (IDTemplate, INPUT_FIELD) VALUES ?";
        for(let i=0;i<abc.length;i++) {
            Match(abc[i]).then(function(str){
                var values = [
                    [result.insertId,str],
                  ];
                global.con.query(sql,[values],function(err1,result1) {
                if(err1) return res.send(err1);
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
        
            let myStr = req.body.Description;
            let abc = myStr.split("!");
            sql = "UPDATE TEMPLATE_INPUT SET INPUT_FIELD = ? WHERE IDTemplate = ?";
            for(let i=0;i<abc.length;i++) {
                Match(abc[i]).then(function(str){
                    
                    global.con.query(sql,[str,result.insertId],function(err1,result1) {
                    if(err1) return res.send(err1);
                    return;
                    });
                });
            }return res.json({status:200,res:'Done'});

        }else{
            return res.json({status:300,res:result});
        }
    });
});

router.post('/DeleteTemplate', function(req, res) {
    var sql = 'UPDATE Templates SET Status = ? WHERE idTemplate = ?';

    global.con.query(sql,[0,req.body.id],function(err,result) {
      if(err) return res.send(err);

       if(result.affectedRows==1) {
        return res.json({status:200,res:result});
        }else{
        return res.json({status:300,res:result});
        }
    });
});

router.get('/getTemplates', function(req, res) {
    var sql = "SELECT * FROM Templates";

    global.con.query(sql,[],function(err,result) {
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
        if(err1) return res.json({status:300,res:err1, error:'Selected template not found'});
        var sql = "SELECT INPUT_FIELD FROM TEMPLATE_INPUT WHERE IDTemplate = ? ";

        if(result1.length>0) {
            global.con.query(sql,[values],function(err2,result2) {
                if(err2) return res.json({status:300,res:err2, error:'Selected customer not found'});

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
                        
                        var sql = "SELECT idUsers, first_name , last_name FROM Users WHERE Email = ?"
                        var values = [[req.body.ID.CustomerEmail],];

                        global.con.query(sql,[values],function(err5,result5) {
                            if(err5) return res.json({status:300,res:err5, error:'Selected customer not found'});
                           
                            var sql = "INSERT INTO ContractPDF (customer_id, ContractPDF_ID, Contract_Name, Contract_StartDate, Contract_Price, USER_ID, contract_end_date) VALUES ?";
                            var values = [[result5[0].idUsers, response,req.body.ID.ContractName, req.body.ID.ContractStartDate, req.body.ID.ContractPrice, req.body.ID.UID, req.body.ID.ContractEndDate],];
    
                            global.con.query(sql,[values],function(err3,result3) {                                
                                if(err3) return res.json({status:300,res:err3, error:'Could not create contract'});
                                    
                                if(result3.affectedRows==1) {
                                    if(req.body.milestone.length > 0) {
                                        for(var i=0;i<req.body.milestone.length;i++) {
                                            var createdat = new Date();
                                            var sql = "INSERT INTO Milestones (Start_Date, End_Date, Contract_ID, Status, Payment_Status, Contract_Name, Milestone_fee, Milestone_schedule, Milestone_Work_execution, name, created_at) VALUES ?";
                                            var values = [[req.body.milestone[i].StartDate, req.body.milestone[i].EndDate, result3.insertId, 1, 0, req.body.ID.ContractName, req.body.milestone[i].Fees, req.body.milestone[i].Schedule, req.body.milestone[i].WorkExecution,req.body.milestone[i].milestonename, createdat],];

                                            global.con.query(sql,[values],function(err4,result4) {
                                                if(err4) return console.log(err4); 
                                            });
                                        }
                                        return res.json({status:200,res:''});
                                    }else {
                                        var sql = "INSERT INTO Milestones (Start_Date, End_Date, Contract_ID, Status, Payment_Status, Contract_Name, Milestone_fee, Milestone_schedule, Milestone_Work_execution,name) VALUES ?";
                                        var values = [[ req.body.ID.ContractStartDate, req.body.ID.ContractEndDate, result3.insertId, 1, 0, req.body.ID.ContractName, 0, '', '','Milestone 1'],];

                                        global.con.query(sql,[values],function(err4,result4) {
                                            if(err4) return res.json({status:300,res:err4, error:'Could not create milestones'});

                                            if(result4.affectedRows==1) {
                                                return res.json({status:200,res:result4});
                                            }

                                        });

                                    }
                                    
                                }else{
                                    return res.json({status:300,res:result3, error:'Could not create contract'});
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

router.post('/MilestoneHistory', function(req, res) {
    var sql = "SELECT milestone_history.*, milestone_status.status_for_company, milestone_status.status_for_customer FROM milestone_history join milestone_status on milestone_status.id = milestone_history.Status WHERE mile_stone_id = ?";
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

router.post('/Milestones', function(req, res) {
    var sql = "SELECT Milestones.*, milestone_status.status_for_company, milestone_status.status_for_customer FROM Milestones join milestone_status on milestone_status.id = Milestones.Status WHERE Contract_ID = ?";
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

function saveMilestoneHistory(req) {
    return new Promise(
    function (resolve, reject) {
        MilestonePromise = new Model.Milestones().where({id: req.body.Mid }).fetchAll();
        MilestonePromise.then(function(milestone) {
            if(milestone==null) {
                reject(err);
            }else {
                var milestone_history  = milestone.toJSON();
                milestone_history[0]['mile_stone_id'] = milestone_history[0]['id']; 
                delete milestone_history[0]['id'];
                console.log(milestone_history);
                new Model.MilestonesHistory(milestone_history[0]).save().then(function(model) {
                    resolve(model);
                }).catch(function(err) {
                    reject(err);
                });	
                
            }
        }).catch(function(err) {
            reject(err);
            
        });	
    });
}

router.post('/UpdateMilestoneStatus', function(req, res) {

    saveMilestoneHistory(req)
    .then(result => {

            if(req.body.MStatus==5 || req.body.MStatus==6 ) {
                var sql = 'UPDATE Milestones SET Status = ? , comments = ? WHERE id = ?';
                var update_arr = [req.body.MStatus,req.body.reason,req.body.Mid];
            }else {
                var sql = 'UPDATE Milestones SET Status = ? WHERE id = ?';
                var update_arr = [req.body.MStatus,req.body.Mid];
            }
            
            global.con.query(sql, update_arr, function(err,result) {
                if(err)  return res.json({status:300,res:'', error:'Internal server error occured : No Milestone found'});    
                if(result.affectedRows==1) {
                    return res.json({status:200,res:result});
                }else{
                    return res.json({status:300,res:'', error:'Internal server errors  : No Milestone found'});
                }
            
            });
        }    
    )
    .catch(error => { 
        return res.json({status:300,res:'', error:'Internal server error  : No Milestone found'});
     });
    
});



router.post('/getCustomerContracts', function(req, res) {
    var sql = "SELECT ContractPDF.*, Users.first_name FROM ContractPDF join Users on Users.idUsers = ContractPDF.USER_ID WHERE customer_id = ?";    
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


router.post('/pdfs', function(req, res) {    
    var sql = "SELECT ContractPDF.*, Users.first_name FROM ContractPDF join Users on Users.idUsers = ContractPDF.customer_id WHERE USER_ID = ?";    
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
    var filePath = __dirname+'/../PDFs/'+req.param('pname');
    var stat = fs.statSync(filePath);
    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Length': stat.size
    });
    var readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});


router.post('/getContractById', function(req, res) {    
    ContractDetailPromise = new Model.Contracts().where({id: req.body.id }).fetchAll({withRelated: ['milestones', 'customer', 'milestones.milestone_status']});
    ContractDetailPromise.then(function(contract_details) {
        if(contract_details==null) {
            return res.json({status:300,res:'', error:'No Contract found'});
        }else {
            return res.json({status:200,res:contract_details});
        }
    }).catch(function(err) {
        return res.json({status:300,res:'', error:'No Contract found'});
    });	

});

router.post('/updateMilestone', function(req, res) {
    req.body.Mid = req.body.id;
    console.log(req.body);
    saveMilestoneHistory(req)
    .then(result => {
        var sql = "UPDATE Milestones SET Status = 1, name = ?, Milestone_Work_execution = ?, penalties = ?, taxes = ? , Start_Date = ?, End_Date = ?, comments = '' WHERE id = ?";
        var update_arr = [req.body.name, req.body.Milestone_Work_execution, req.body.penalties, req.body.taxes, req.body.Start_Date, req.body.End_Date, req.body.id];
            
            var query  = global.con.query(sql, update_arr, function(err,result) {
                if(err)  return res.json({status:300,res:'', error:'Internal server error occured : No Milestone found'});    
                if(result.affectedRows==1) {
                    result.Contract_ID = req.body.Contract_ID;
                    return res.json({status:200,res:result});
                }else{
                    console.log(result);
                    return res.json({status:300,res:'', error:'Internal server errors  : No Milestone found'});
                }
            
            });            
        }    
    )
    .catch(error => { 
        return res.json({status:300,res:'', error:'Internal server error  : No Milestone found'});
     });

});


router.post('/getMilestoneToUpdate', function(req, res) {
    
    MilestonePromise = new Model.Milestones().where({id: req.body.id }).where({Status: 6 }).fetchAll({withRelated: ['milestone_status']});
    MilestonePromise.then(function(milestone_details) {
        
        if(milestone_details==null) {
            return res.json({status:300,res:'', error:'No Milestone found'});
        }else {            
            return res.json({status:200,res:milestone_details});
        }
    }).catch(function(err) {
        return res.json({status:300,res:'', error:'No Milestone found'});
    });	
});
    
module.exports = router;
router.get('/demoejs', function(req, res) {    
    res.render('demo', {pageData: {name : 'pdfexample'}});
 });

router.get('/demopdf', function(req, res) {    
   console.log("Hello s");
   console.log(html);
   pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res); 
  });
});
// //////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////  FUNCTION    ////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

var GeneratePdf = function (str,str2) {
    return new Promise(function(resolve,reject){
        var doc = new PDFDocument;
        var name = crypto.createHash('md5').update(Date.now()+'').digest('hex');
        writeStream = fs.createWriteStream('./PDFs/'+name+'.pdf');
        doc.pipe(writeStream);
        doc.image(__dirname+'/../frontend/src/assets/images/header.jpg',0,1,{width:610});
        doc.fontSize(30).text('Services Contract', 50, 120);
        doc.fontSize(15).text(str, {
            width: 410,
            align: 'center'
        });
        doc.text(str2, {
            width: 410,
            align: 'center',
            align: 'justify'
        });
        doc.image(__dirname+'/../frontend/src/assets/images/footer.jpg',0,doc.page.height-50,{width:610});
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
