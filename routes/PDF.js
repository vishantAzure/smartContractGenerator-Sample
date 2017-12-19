var express = require('express');
var router = express.Router();
var crypto=require('crypto');
var pdfFiller = require('pdffiller');
var sourcePDF = "public/data.fdf";
var fs = require('fs');
var pdf = require('html-pdf');
var options = { format: 'Letter'};
var PDFDocument = require('pdfkit');
var _ = require('lodash');
var moment = require('moment');
var Model = require('../model');


router.post('/CreateTemplate', function(req, res) {
    var sql = "INSERT INTO Templates (Template_Name, Description, Category_Name, Status, blockchain_id) VALUES ?";
    var values = [[req.body.Name,req.body.Description,req.body.categoryName,req.body.status, req.body.blockchain_id],];

    global.con.query(sql,[values],function(err,result) { 
        if(err) return res.send(err);

        let abc = req.body.Description.split("!");
        sql = "INSERT INTO TEMPLATE_INPUT (IDTemplate, INPUT_FIELD) VALUES ?";
        for(let i=0;i<abc.length;i++) {
            getToken(abc[i]).then(function(str){
                
                var values = [
                    [result.insertId,str],
                  ];
                global.con.query(sql,[values],function(err1,result1) {
                if(err1) {                    
                    return res.send(err1);
                    return;
                }
                    
                });
            });
        }return res.json({status:200,res:'Done'});
    });
});

router.post('/UpdateTemplate', function(req, res) {
    console.log(req.body);
    var sql = 'UPDATE Templates SET Template_Name = ?, Category_Name = ?, Status = ?, Description = ? WHERE idTemplate = ?';
    global.con.query(sql,[req.body.Template_Name, req.body.Category_Name ,req.body.Status, req.body.Description , req.body.idTemplate],function(err,result) {
        if(err) return res.send(err);

        if(result.affectedRows==1) {

            let myStr = req.body.Description;            
            let abc = req.body.Description.split("!");
            delete_sql = "delete from TEMPLATE_INPUT  where IDTemplate = ?";
            var delete_values = [req.body.id];
            sql = "INSERT INTO TEMPLATE_INPUT (IDTemplate, INPUT_FIELD) VALUES ?";
            global.con.query(delete_sql,[delete_values],function(deleted_err, deleted) {
                for(let i=0;i<abc.length;i++) {
                    getToken(abc[i]).then(function(str){
                        if( typeof str !== 'undefined' ) {
                            var values = [[req.body.id,str],];
                            global.con.query(sql,[values],function(err1,result1) {

                            });
                        }
                    });
                }
            });
            
            return res.json({status:200,res:'Done'});

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
    var sql = "SELECT blockchain_id FROM Templates WHERE idTemplate = ? ";
    var values = [[req.body.TempID],];

    global.con.query(sql,[values],function(err,result) {
        if(err) return res.status(500).send();

        if(result.length>0) {
            var sql = "SELECT * FROM TEMPLATE_INPUT WHERE IDTemplate = ? ";
        
            global.con.query(sql,[values],function(err1,result1) {
              if(err1) return res.status(500).send();
        
               if(result1.length>0) {
                return res.json({status:200,res:result1,template:result});
              }else{
                return res.json({status:300,res:result1});
              }
            });
        }else{
        return res.json({status:300,res:result});
        }
    });
});


router.post('/getTemplateDescriptionById', function(req, res) {
    var sql = "SELECT Description FROM Templates WHERE IDTemplate = ? ";
    var values = [[req.body.id],];

    global.con.query(sql,[values],function(err,result) {
      if(err) return res.status(500).send();

       if(result.length>0) {
        return res.json({status:200,res:result});
      }else{
        return res.json({status:300,res:result});
      }
    });
});


router.post('/createPDF', function(req, res) {
    var values = [[req.body.ID.ID],];
    var sql = "SELECT INPUT_FIELD, Templates.Description  FROM TEMPLATE_INPUT join Templates on Templates.idTemplate = TEMPLATE_INPUT.IDTemplate WHERE TEMPLATE_INPUT.IDTemplate = ? ";
    global.con.query(sql,[values],function(err,result) {
        if(err) return res.send(err);
        if(result.length>0) {
            var template_description = result[0]['Description'];
            var End_Date = moment(req.body.ID.end_date.formatted).format();
            var Start_Date = moment(req.body.ID.Date.formatted).format();

            var sql = "SELECT idUsers FROM Users WHERE blockchain_id = ?"
            var values = [[req.body.ID.CustomerEmail],];

            global.con.query(sql,[values],function(errcid,result2cid) {                                
                if(errcid) return res.send(errcid);
                if(result2cid.length>0) {
                    var sql = "INSERT INTO ContractPDF (customer_id, Contract_Name, template_id, Contract_StartDate, Contract_Price, USER_ID, contract_end_date, blockchain_id) VALUES ?";
                    var values = [[result2cid[0].idUsers, req.body.ID.ContractName, req.body.ID.ID, Start_Date, req.body.ID.Price, req.body.ID.UID, End_Date, req.body.ID.blockchain_id],];
        
                    global.con.query(sql,[values],function(err2,result2) {                                
                        if(err2) return res.send(err2);
        
                        if(result2.insertId) {
        
                            for(var i=0;i<req.body.fields.length;i++) {
                                        var sql = "INSERT INTO contract_input_response (contract_id, input_field, responses) VALUES ?";
                                        var values = [[result2.insertId,result[i].INPUT_FIELD,req.body.fields[i].Value_Input],];
        
                                        global.con.query(sql,[values],function(err3,result3) {
                                            //if(err3) return res.send(err3); 
                                        });
        
                            }
                            
                            if(req.body.milestone.length>0) {
                                var milestone_count = 0;
                                for(var i=0;i<req.body.milestone.length;i++) {
                                    var createdat = moment(new Date()).format();
                                    var End_Date = moment(req.body.milestone[i].EndDate.formatted).format();
                                    var Start_Date = moment(req.body.milestone[i].StartDate.formatted).format();
                                    var sql = "INSERT INTO Milestones (Start_Date, End_Date, Contract_ID, Status, Payment_Status, Milestone_fee, Milestone_schedule, Milestone_Work_execution, name, created_at,blockchain_id) VALUES ?";
                                    var values = [[Start_Date, End_Date, result2.insertId, 1, 0, req.body.milestone[i].Fees, req.body.milestone[i].Schedule, req.body.milestone[i].WorkExecution,req.body.milestone[i].milestonename, createdat,req.body.ID.MilestonesID[i]],];
        
                                    global.con.query(sql,[values],function(err4,result4) {
                                        if(err4) return res.send(err4); 
                                        milestone_count ++;
                                        if(milestone_count == req.body.milestone.length) {
                                            return GeneratePdf(req, res, result2.insertId, template_description).then(function(response) {
                                                return res.json({status:200});
                                            }).catch(error => { 
                                                console.log(error);
                                                return res.status(500).send();
                                            });
                                        }
                                    });
                                }
                            }else{
                                var createdat = moment(new Date()).format();
                                var End_Date = moment(req.body.ID.end_date.formatted).format();
                                var Start_Date = moment(req.body.ID.Date.formatted).format();
                                var sql = "INSERT INTO Milestones (Start_Date, End_Date, Contract_ID, Status, Payment_Status, Milestone_fee, Milestone_schedule, Milestone_Work_execution, name, created_at,blockchain_id) VALUES ?";
                                var values = [[Start_Date, End_Date, result2.insertId, 1, 0, req.body.ID.Price, '', '',req.body.ID.ContractName, createdat,req.body.ID.MilestonesID[0]],];
                                
                                global.con.query(sql,[values],function(err5,result5) {
                                    if(err5) return res.send(err5);     
                                    return GeneratePdf(req, res, result2.insertId, template_description).then(function(response) {
                                        return res.json({status:200});
                                    }).catch(error => { 
                                        console.log(error);
                                        return res.status(500).send();
                                    });
                                });
                            }
                        }else{
                            return res.status(500).send();
                        }
                    });
                }
            });
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
        console.log(error);
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
    ContractDetailPromise = new Model.Contracts().where({id: req.body.id }).fetchAll({withRelated: ['milestones', 'customer', 'provider', 'milestones.milestone_status']});
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
    saveMilestoneHistory(req)
    .then(result => {
        
        var sql = "UPDATE Milestones SET Status = 1, name = ?, Milestone_Work_execution = ?, Milestone_schedule = ?, Milestone_fee = ?, penalties = ?, taxes = ? , Start_Date = ?, End_Date = ?, comments = '' WHERE id = ?";
        var update_arr = [req.body.name, req.body.Milestone_Work_execution, req.body.Milestone_schedule, req.body.Milestone_fee, req.body.penalties, req.body.taxes, req.body.Start_Date, req.body.End_Date, req.body.id];            
            var query  = global.con.query(sql, update_arr, function(err,result) {
                if(err)  return res.json({status:300,res:'', error:'Internal server error occured : No Milestone found'});    
                if(result.affectedRows==1) {
                    result.Contract_ID = req.body.Contract_ID;
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

router.post('/validateAmount', function(req, res) {
    var contract_id = req.body.Contract_ID;
    var milestone_amount = req.body.Milestone_fee;
    
    var ret_arr = [];
    return getContractDetailsById(contract_id)
    .then(result => {
        var milestones = result[0].milestones;
        var contract_amount = result[0].Contract_Price;
        var total_milestones = result[0].milestones.length;
        var editable_milestones = 0;
        var editable_milestones_amount = 0;
        var editable_milestones_amount_total = 0;
        var non_editable_amount_total = 0;
        for (var i = 0, len = milestones.length; i < len; i++) {
            if(milestones[i].Status == 6) {
                editable_milestones++;
                editable_milestones_amount_total = editable_milestones_amount_total + milestones[i].Milestone_fee;
            }else {
                non_editable_amount_total = non_editable_amount_total + milestones[i].Milestone_fee;
            }
        }
        
        editable_milestones_amount = contract_amount - non_editable_amount_total;
        console.log(editable_milestones_amount);
        if(editable_milestones > 1){
            if(milestone_amount < editable_milestones_amount) {
                return res.json({status:true,error_message:'success'});
                
            }else {
                return res.json({status:false,error_message:'Milestone fee must be less than ' + editable_milestones_amount});
            }
            
        }else {                
            if(milestone_amount > editable_milestones_amount) {
                return res.json({status:false,error_message:'Milestone fee must be less than or equal to ' + editable_milestones_amount});
            }else {
                return res.json({status:true,error_message:'success'});
            }
        }
        
        }).catch(error => { 
        
        });
});

function getTemplateDescription(req, res, description, inputs) {
    
    var description = description;
    return new Promise(
    function (resolve, reject) {
       
        for (var i = 0, len = inputs.length; i < len; i++) {
            var placeholder ="{"+inputs[i]['input_field']+"}!";        
            var value = inputs[i]['responses'];
            description = description.replace(placeholder, value);

        }
        resolve(description);
    });	
    
}

/**
 *  Get Contract details with milestones by contract id
 */
function getContractDetailsById(contract_id) {
    return new Promise(
    function (resolve, reject) {
        ContractDetailPromise = new Model.Contracts().where({id: contract_id }).fetchAll({withRelated: ['milestones', 'customer', 'provider', 'milestones.milestone_status', 'templateresponses', 'template']});
        ContractDetailPromise.then(function(contract_details) {
            if(contract_details==null) {
               reject('No Contract found');
            }else {
                resolve(contract_details.toJSON());
            }
        }).catch(function(err) {
            reject(err);
        });	
    });	
}

router.get('/getpdf', function(req, res) {
    
    getContractDetailsById(1)
    .then(result => {                
        getTemplateDescription(req, res, result[0]['template']['Description'], result[0]['templateresponses']).then(function(template_description) {
            
            res.render('contract_pdf', {ContractDetails: result[0], template_description : template_description});
        }).catch(error => { 
            console.log(error);
            return res.status(500).send();
        });
        
    }).catch(error => { 
        
     });
 });
    


router.get('/demoejs', function(req, res) {
    
    getContractDetailsById(1)
    .then(result => {
        
        getTemplateDescription(req, res, result[0]['template']['Description'], result[0]['templateresponses']).then(function(template_description) {
            res.render('contract_pdf', {ContractDetails: result[0],  template_description : template_description}, function(err, view_result) {
            // render on success
            if (view_result) {
                html = view_result;    
                pdf.create(html, options).toFile('./PDFs/businesscard.pdf', function(err, res) {
                    if (err) return console.log(err);        
                });
            }else {
                   res.end('An error occurred');
                   console.log(err);
                }
            });
            
        }).catch(error => { 
            console.log(error);
            return res.status(500).send();
        });
        
    }).catch(error => { 
        console.log(error);
     });
    
 });


router.post('/getStats', function(req, res) {
    
    var sql = "SELECT * FROM (SELECT COUNT(id) AS milestone_total FROM Milestones ) a, \n\
    (SELECT COUNT(id) AS milestone_completed FROM Milestones WHERE Status = 4) b, \n\
    (SELECT COUNT(*) AS service_providers FROM Users WHERE User_Type = 'Service Provider') c,\n\
    (SELECT COUNT(*) AS total_customers FROM Users WHERE User_Type = 'Customer') d,\n\
    (SELECT COUNT(*) AS total_contract FROM Users WHERE User_Type = 'Customer') e";
    global.con.query(sql, function(err,result) {
        if(err) return res.send(err);
            return res.json({status:300,res:result});
    });
 });

router.post('/getCompanyStats', function(req, res) {
    var user_id = req.body.id;
    var sql = "SELECT * FROM ( SELECT COUNT( id ) AS total_contract FROM ContractPDF WHERE USER_ID = "+user_id+" )a, (  SELECT COUNT( Milestones.id ) AS total_count FROM Milestones join ContractPDF on ContractPDF.id  = Milestones.Contract_ID where ContractPDF.USER_ID = "+user_id+") b, ( SELECT COUNT( Milestones.id ) AS total_milestones_by_status, Milestones.`Status`, milestone_status.status_for_company FROM Milestones join ContractPDF on ContractPDF.id  = Milestones.Contract_ID and ContractPDF.USER_ID = "+user_id+" right join milestone_status on milestone_status.id = Milestones.Status group by milestone_status.`id`) c;";
    global.con.query(sql, function(err,result) {
        if(err) return res.send(err);
            return res.json({status:300,res:result});
    });
 });
 
router.post('/getCustomerStats', function(req, res) {
    var cust_id = req.body.id;
    var sql = "SELECT * FROM ( SELECT COUNT( id ) AS total_contract FROM ContractPDF WHERE customer_id = "+cust_id+" )a, (  SELECT COUNT( Milestones.id ) AS total_count FROM Milestones join ContractPDF on ContractPDF.id  = Milestones.Contract_ID where ContractPDF.customer_id = "+cust_id+") b, ( SELECT COUNT( Milestones.id ) AS total_milestones_by_status, Milestones.`Status`, milestone_status.status_for_customer FROM Milestones join ContractPDF on ContractPDF.id  = Milestones.Contract_ID and ContractPDF.customer_id = "+cust_id+" right join milestone_status on milestone_status.id = Milestones.Status group by milestone_status.`id`) c;";
    global.con.query(sql, function(err,result) {
        if(err) return res.send(err);
            return res.json({status:300,res:result});
    });
 });


 
 



module.exports = router;
// //////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////  FUNCTION    ////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
  
  var GeneratePdf = function (req, res, contract_id, template_orig_description) {      
    return new Promise(function(resolve,reject){
        getContractDetailsById(contract_id).then(result => {            
             var pdf_name = crypto.createHash('md5').update(Date.now()+'').digest('hex');
             getTemplateDescription(req, res, template_orig_description, result[0]['templateresponses']).then(function(template_description) {
                res.render('contract_pdf', {ContractDetails: result[0],  template_description : template_description}, function(err, view_result) {
                // render on success
                
                if (view_result) {
                    html = view_result;    
                    pdf.create(html, options).toFile('./PDFs/'+pdf_name+'.pdf', function(err, res) {
                        if (err) return console.log(err);
                        var sql = 'UPDATE ContractPDF SET ContractPDF_ID = ?, template_desc = ? WHERE id = ?';
                        
                        global.con.query(sql,[pdf_name, template_orig_description, contract_id],function(err,result) {
                          if(err) return res.send(err);
                            resolve('success');
                        });
                        
                    });
                }else {
                       reject('failed');
                    }
                });
            }).catch(error => { 
                reject('failed');
            });
        });
    });
  }
    
var getToken = function (str) {
    return new Promise(function(resolve,reject){
        let STRING = str.match('{(.*)}');
        resolve(STRING[1]);
    });
  }
