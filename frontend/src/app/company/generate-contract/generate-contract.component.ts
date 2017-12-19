import { Component, OnInit ,NgZone} from '@angular/core';
import { Router , ActivatedRoute}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Template } from '../../modal';
import { Location } from '@angular/common';
import { Milestone } from '../../modal';
import * as config from '../../../../../config/config';
import {IMyOptions, IMyDateModel} from 'mydatepicker';
import * as _ from "lodash";
import * as moment from 'moment';

declare var $;
declare var window;
@Component({
  selector: 'app-generate-contract',
  templateUrl: './generate-contract.component.html',
    
})
export class GenerateContractComponent implements OnInit {
  User_data;
  Fields;
  Template;
  dashboard;
  preview;
  message;
  customers;
  Milestones;
  Etherium;
  MilestoneID = 1;
  TemplateData;
  myOptions: IMyOptions = {
    dateFormat: 'yyyy.mm.dd',
  };
  constructor(public router: Router,public http: Http,public route: ActivatedRoute,private _location: Location,private zone: NgZone) {
    this.Milestones = [];
    this.Template = {};
    var ABI = [{"constant":true,"inputs":[],"name":"getcustomer_info","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"cate_id","type":"uint256"}],"name":"gettemplate","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_description","type":"bytes32"},{"name":"_status","type":"bool"},{"name":"_category_id","type":"uint256"}],"name":"set_Template","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"m_id","type":"uint256"}],"name":"check_status","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_cate_type","type":"bytes32"},{"name":"maincate_id","type":"uint256"},{"name":"_status","type":"bool"}],"name":"setcategory","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"ApproveByCustomer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"m_id","type":"uint256"},{"name":"_start_date","type":"uint256"},{"name":"_end_date","type":"uint256"},{"name":"price","type":"uint256"}],"name":"update_milestone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"cont_id","type":"uint256"}],"name":"getcontractBycont_id","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"},{"name":"graseTime","type":"uint256"}],"name":"checkFailure","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_mId","type":"uint256"}],"name":"getMilestonesBymile_id","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"m_id","type":"uint256"}],"name":"paymentToContract","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"cateId","type":"uint256"}],"name":"getcategoryBycateId","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fname","type":"bytes32"},{"name":"_lname","type":"bytes32"},{"name":"_email","type":"bytes32"},{"name":"_password","type":"bytes32"},{"name":"_phone_no","type":"uint256"},{"name":"wallet","type":"address"}],"name":"setcustomer_info","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"temp","type":"uint256"}],"name":"gettemplateBytemp_id","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getcategory","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32[]"},{"name":"cont_id","type":"uint256"},{"name":"_fees","type":"uint256[]"},{"name":"_penalty","type":"uint256[]"},{"name":"_start_date","type":"uint256[]"},{"name":"_end_date","type":"uint256[]"},{"name":"_price","type":"uint256[]"}],"name":"setMilestones","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"servID","type":"uint256"}],"name":"getServiveProvider","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"temp","type":"uint256"}],"name":"getcontractBytemp_id","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"cont_id","type":"uint256"}],"name":"getMilestonesByCon_id","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"DissAproveByCustomer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"custId","type":"uint256"}],"name":"getcustomer","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fname","type":"bytes32"},{"name":"_lname","type":"bytes32"},{"name":"_email","type":"bytes32"},{"name":"_password","type":"bytes32"},{"name":"_phone_no","type":"uint256"},{"name":"wallet","type":"address"}],"name":"setServiceProvider","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"markMilestoneComplete","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"m_id","type":"uint256"}],"name":"disApproveByCustomer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getserviceprovider","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_start_time","type":"uint256"},{"name":"end_time","type":"uint256"},{"name":"_price","type":"uint256"},{"name":"temp","type":"uint256"},{"name":"cust","type":"uint256"},{"name":"serv","type":"uint256"},{"name":"typee","type":"bytes32[]"},{"name":"valuee","type":"bytes32[]"}],"name":"set_contract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"uint256"}],"name":"c","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"address"}],"name":"d","type":"event"}];    
    console.log(window.web3.isConnected());
    window.web3.eth.getAccounts((err, acc) => {
      this.Etherium = window.web3.eth.contract(ABI).at('0xe11c1a5613353111a96ab5ad17cd8c4a291cd7ed');
    });
    this.route.queryParams.subscribe(params => {
      this.Template.ID=params["TemplateID"];
  });
   }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
    this.Template.UID = this.User_data.idUsers;
    if(this.User_data) {
      switch(this.User_data.User_Type){
        case "Customer":
            this.dashboard='customer';
            break;
        case "Service Provider":
            this.dashboard='company';
            break;
        case "Admin":
            this.dashboard='admin';
            break;
        }
      let obj={TempID:this.Template.ID}

      this.http.post('//' + config.global_ip + '/pdf/getInputs', obj).subscribe((res: any) => {
        var abc = JSON.parse(res._body);
        this.Fields = abc.res;
        this.TemplateData = abc.template;
      }, (err) => {
        console.log(err);
      });
      this.http.post('//' + config.global_ip + '/auth/customer', obj).subscribe((res: any) => {
        this.customers = JSON.parse(res._body).res;
      }, (err) => {
        console.log(err);
      });
  }else{
      console.log('ll');
  }
  }

  backClicked() {
    this._location.back();
  }

  disableUntil(e) {
    let copy = this.getCopyOfOptions();
    copy.disableUntil = e.date;
    this.myOptions = copy;
  }

  disableSince(e) {
    let copy = this.getCopyOfOptions();
    copy.disableSince = e.date;
    this.myOptions = copy;
  }

getCopyOfOptions(): IMyOptions {
    return JSON.parse(JSON.stringify(this.myOptions));
}

PreviewContract() {
  this.http.post('//'+config.global_ip+'/pdf/preview',{fields:this.Fields,ID:this.Template,milestone:this.Milestones}).subscribe((res:any)=>{
    var result = JSON.parse(res._body);

    if(result.status==200) {
      this.preview = result.res;
      $('#myModal222222').modal('toggle');
    }else{
      this.message='UnSucessfull';
      $('#message').modal('toggle');
    }
  },(err)=>{
    this.message=err;
    $('#message').modal('toggle');
  });
}

InitializePDF() {
  let self = this;
  return new Promise(function(resolve,reject) {
    var name=[];
    var value = [];

    for(var i=0;i<self.Fields.length;i++) {
      name.push(self.Fields[i].INPUT_FIELD);
      value.push(self.Fields[i].Value_Input);
    }
    self.Etherium.set_contract(self.Template.Date.epoc,self.Template.end_date.epoc,self.Template.Price,self.TemplateData[0].blockchain_id,self.Template.CustomerEmail, self.User_data.blockchain_id,name,value, function (err, res) {
      if(err) {
        reject(err);
      }
      else{
        $.blockUI({ message: '<h1> Waiting for transaction to be mined...</h1>' });
        var Interval = setInterval(function () {
          console.log('interval');

          window.web3.eth.getTransactionReceipt(res, function (err1, res1) {
            if (err1) {
              reject(err1);
              clearInterval(Interval);
            }

            if (res1 != null || res1 != undefined) {
              clearInterval(Interval);

              self.Etherium.getcontractBytemp_id(self.TemplateData[0].blockchain_id, function (err2, res2) {
                if (err2) {
                  reject(err2);
                }
                else{
                  console.log(res2);
                  var str = JSON.stringify(res2);
                  var obj = JSON.parse(str);
                  try{
                    if(obj[obj.length-1]==undefined)  throw Error('undefined');
                  }catch(e){
                    return $.notify('Please Try Again', 'error'); 
                  }
                  self.Template.blockchain_id  = obj[obj.length-1].replace(/\./g,'').split('e')[0];
                  resolve('sucess');                    
                }
              });
            }
          });
        }, 6000);
      }
    });
  });
}

SetMilestone() {
  let self = this;
  return new Promise(function(resolve,reject) {
    var name = [];
    var id = [];
    var fees = [];
    var penalty = [];
    var start_date = [];
    var end_date = [];
    var price = [];
    if(self.Milestones.length>0) {
      for(var i=0;i<self.Milestones.length;i++) {
        name.push(self.Milestones[i].milestonename);
        id = self.Template.blockchain_id;
        fees.push(self.Milestones[i].Fees);
        penalty.push(self.Milestones[i].Penalties);
        start_date.push(self.Milestones[i].StartDate.epoc);
        end_date.push(self.Milestones[i].EndDate.epoc);
        price.push(self.Milestones[i].Taxes);
        console.log(name[i],id,fees[i],penalty[i],start_date[i],end_date[i],price[i]);
      }
    }else{
      name.push(self.Template.ContractName);
      id = self.Template.blockchain_id;
      fees.push(self.Template.Price);
      penalty.push(0.000000000000000000);
      start_date.push(self.Template.Date.epoc);
      end_date.push(self.Template.end_date.epoc);
      price.push(self.Template.Price);
      console.log(name[0],id,fees[0],penalty[0],start_date[0],end_date[0],price[0]);
    }
    self.Etherium.setMilestones(name,id,fees,penalty,start_date,end_date,price,function(err,res){
      if(err) {reject(err);}
      var Interval = setInterval(function () {
        console.log('interval');

        window.web3.eth.getTransactionReceipt(res, function (err1, res1) {
          if (err1) {
            reject(err1);
            clearInterval(Interval);
          }

          if (res1 != null || res1 != undefined) {
            clearInterval(Interval);

            self.Etherium.getMilestonesByCon_id(self.Template.blockchain_id, function (err2, res2) {
              if (err2) { reject(err2);}
              else{
                self.Template.MilestonesID = [];
                var str = JSON.stringify(res2);
                var obj = JSON.parse(str);
                try{
                  if(obj[obj.length-1]==undefined)  throw Error('undefined');
                }catch(e){
                  return $.notify('Please Try Again', 'error'); 
                }
                for(var i=0;i<res2.length;i++) {
                  self.Template.MilestonesID.push(obj[i].replace(/\./g,'').split('e')[0]);
                }
                resolve('sucess');                    
              }
            });
          }
        });
      }, 6000);
    })
  });
}

  CreatePDF() {
    let validated = true;
    let milestones =  this.Milestones;    
    let milestone_amount = 0;    
    let contract_amount: number = this.Template.Price;    
    if(milestones.length > 0) {        
        Object.keys(milestones).forEach(function(key) {            
            if(milestones[key].EndDate.epoc <= milestones[key].StartDate.epoc) {
                $.notify("Milestones start date must be less than end date", 'error');
                validated = false;
            }
            milestone_amount += parseFloat(milestones[key].Fees);
        });        
        milestone_amount = Math.round(milestone_amount);
        contract_amount = Math.round(contract_amount);
        
        if(contract_amount != milestone_amount) {            
            validated = false;
            $.notify("Milestones total amount must be equal to contract amount", 'error');
        }
    }
    let self = this;
    if(validated) {
      self.InitializePDF().then((res)=>{
        self.SetMilestone().then((res1)=>{
          console.log({ fields: self.Fields, ID: self.Template, milestone: self.Milestones });
          self.http.post('//' + config.global_ip + '/pdf/createPDF', { fields: self.Fields, ID: self.Template, milestone: self.Milestones }).subscribe((response: any) => {
            var result = JSON.parse(response._body);
      
            if (result.status == 200) {
              $.unblockUI({ fadeOut: 200 });
              self.zone.run(() => {
                self.router.navigate(['/' + self.dashboard + '/ViewContract']);
              });
            } else {
              $.unblockUI({ fadeOut: 200 });
              $.notify('UnSucessfull', 'error');
            }
          }, (error) => {
            $.unblockUI({ fadeOut: 200 });
            $.notify(error, 'error');
          });
        },(err1)=>{
          $.unblockUI({ fadeOut: 200 });
          $.notify(err1, 'error');
        })
      },(err)=>{
        $.unblockUI({ fadeOut: 200 });
        $.notify(err, 'error');
      });
    }
  }

  AddMilestone() {
    let ABC = new Milestone();
    ABC.ID = this.MilestoneID;
    this.MilestoneID++;
    this.Milestones.push(ABC);
  }

  RemoveMilestone() {
    this.Milestones.pop();
    this.MilestoneID--;
  }

}
