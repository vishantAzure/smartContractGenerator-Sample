import { Component, OnInit ,NgZone} from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as config from '../../../../config/config';
import {NgForm} from '@angular/forms';

declare var $;
declare var window;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  model;
  User_data;
  dashboard;
  message;
  Etherium;
  User = ['Customer','Service Provider'];
      constructor(public http: Http,public router: Router,private zone: NgZone) { 
        this.model = {};
        var ABI = [{"constant":true,"inputs":[],"name":"getcustomer_info","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"cate_id","type":"uint256"}],"name":"gettemplate","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_description","type":"bytes32"},{"name":"_status","type":"bool"},{"name":"_category_id","type":"uint256"}],"name":"set_Template","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"m_id","type":"uint256"}],"name":"check_status","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_cate_type","type":"bytes32"},{"name":"maincate_id","type":"uint256"},{"name":"_status","type":"bool"}],"name":"setcategory","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"ApproveByCustomer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"m_id","type":"uint256"},{"name":"_start_date","type":"uint256"},{"name":"_end_date","type":"uint256"},{"name":"price","type":"uint256"}],"name":"update_milestone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"cont_id","type":"uint256"}],"name":"getcontractBycont_id","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"},{"name":"graseTime","type":"uint256"}],"name":"checkFailure","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_mId","type":"uint256"}],"name":"getMilestonesBymile_id","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"m_id","type":"uint256"}],"name":"paymentToContract","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"cateId","type":"uint256"}],"name":"getcategoryBycateId","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fname","type":"bytes32"},{"name":"_lname","type":"bytes32"},{"name":"_email","type":"bytes32"},{"name":"_password","type":"bytes32"},{"name":"_phone_no","type":"uint256"},{"name":"wallet","type":"address"}],"name":"setcustomer_info","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"temp","type":"uint256"}],"name":"gettemplateBytemp_id","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getcategory","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32[]"},{"name":"cont_id","type":"uint256"},{"name":"_fees","type":"uint256[]"},{"name":"_penalty","type":"uint256[]"},{"name":"_start_date","type":"uint256[]"},{"name":"_end_date","type":"uint256[]"},{"name":"_price","type":"uint256[]"}],"name":"setMilestones","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"servID","type":"uint256"}],"name":"getServiveProvider","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"temp","type":"uint256"}],"name":"getcontractBytemp_id","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"cont_id","type":"uint256"}],"name":"getMilestonesByCon_id","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"DissAproveByCustomer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"custId","type":"uint256"}],"name":"getcustomer","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fname","type":"bytes32"},{"name":"_lname","type":"bytes32"},{"name":"_email","type":"bytes32"},{"name":"_password","type":"bytes32"},{"name":"_phone_no","type":"uint256"},{"name":"wallet","type":"address"}],"name":"setServiceProvider","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idMilestone","type":"uint256"}],"name":"markMilestoneComplete","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"m_id","type":"uint256"}],"name":"disApproveByCustomer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getserviceprovider","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_start_time","type":"uint256"},{"name":"end_time","type":"uint256"},{"name":"_price","type":"uint256"},{"name":"temp","type":"uint256"},{"name":"cust","type":"uint256"},{"name":"serv","type":"uint256"},{"name":"typee","type":"bytes32[]"},{"name":"valuee","type":"bytes32[]"}],"name":"set_contract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"uint256"}],"name":"c","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"address"}],"name":"d","type":"event"}];    
        console.log(window.web3.isConnected());
        window.web3.eth.getAccounts((err, acc) => {
          this.Etherium = window.web3.eth.contract(ABI).at('0xe11c1a5613353111a96ab5ad17cd8c4a291cd7ed');
        });
      }
    
  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
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
  }else{
      console.log('ll');
  }
  }

  Logout() {
    localStorage.clear();
    this.router.navigate(['/']);
    this.ngOnInit();
  }

  Toggle() {
    $("#dropdown").toggle();
  }

  formreset(f:NgForm) {
    f.resetForm();
  }

  Login() {
    $('#loginmodal').modal('toggle');
    let obj ={email:this.model.email,password:this.model.password}

    this.http.post('//'+config.global_ip+'/auth/login',obj).subscribe((res:any)=>{
      this.model = {};
      var result = JSON.parse(res._body);

      if(result.status==200) {
        localStorage.setItem("User", JSON.stringify(result.res[0]));
        switch(result.res[0].User_Type){
          case "Customer":
              this.router.navigate(['/customer/dashboard']);
              break;
          case "Service Provider":
              this.router.navigate(['/company/dashboard']);
              break;
          case "Admin":
              this.router.navigate(['/admin/dashboard']);
              break;
        }
      }else if(result.status==300) {
        $.notify('Email Or Password Do Not Match', 'error'); 
      }
    },(err)=>{
      $.notify(err, 'error'); 
    });
  }

  Register() {
    let self = this;
    $('#registermodal').modal('hide');
    if(self.model.user_type=='Customer') {
      self.Etherium.setcustomer_info(self.model.firstname,self.model.lastname,self.model.email,self.model.password, self.model.phone,self.model.walletaddress,function(err,res) {
        if(err) {
          return $.notify(err, 'error'); 
        }else{
        $.blockUI({ message: '<h1>Waiting for transaction to be mined...</h1>' });
        var Interval = setInterval(function () {
          window.web3.eth.getTransactionReceipt(res, function (err1, res1) {
            if (res1 != null || res1 != undefined) {
              clearInterval(Interval);
              self.Etherium.getcustomer_info(function (err2, res2) {
                if (err2) {
                  $.unblockUI({ fadeOut: 200 });
                  return $.notify(err, 'error'); 
                }
                var str = JSON.stringify(res2);
                var obj = JSON.parse(str);
                try{
                  if(obj[obj.length-1]==undefined)  throw Error('undefined');
                }catch(e){
                  return $.notify('Please Try Again', 'error'); 
                }
                self.model.blockchain_id = obj[obj.length-1].replace(/\./g,'').split('e')[0];
                self.http.post('//'+config.global_ip+'/auth/signup',self.model).subscribe((res:any)=>{
                  self.model = {};
                  var result = JSON.parse(res._body);
                  if(result.status==200) {
                    $.unblockUI({ fadeOut: 200 });
                    $.notify('Registration Sucessfull', 'success');
                  }else{
                    $.unblockUI({ fadeOut: 200 });
                    $.notify('error', 'error'); 
                  }
                },(err)=>{
                  $.unblockUI({ fadeOut: 200 });
                  $.notify(err, 'error'); 
                });
              });
            }
          });
        },8000);
      }
      });

    }else{

      this.Etherium.setServiceProvider(self.model.firstname,self.model.lastname,self.model.email,self.model.password, self.model.phone,self.model.walletaddress,function(err,res) {
        if(err) {
          return $.notify(err, 'error'); 
        }else{
        $.blockUI({ message: '<h1>Waiting for transaction to be mined...</h1>' });
        var Interval = setInterval(function () {
          window.web3.eth.getTransactionReceipt(res, function (err1, res1) {
            if (res1 != null || res1 != undefined) {
              clearInterval(Interval);
              self.Etherium.getserviceprovider(function (err2, res2) {
                if (err2) {
                  $.unblockUI({ fadeOut: 200 });
                  $.notify(err2, 'error');
                }
                var str = JSON.stringify(res2);
                var obj = JSON.parse(str);
                try{
                  if(obj[obj.length-1]==undefined)  throw Error('undefined');
                }catch(e){
                  return $.notify('Please Try Again', 'error'); 
                }
                self.model.blockchain_id = obj[obj.length-1].replace(/\./g,'').split('e')[0];
                self.http.post('//'+config.global_ip+'/auth/signup',self.model).subscribe((res:any)=>{
                  self.model = {};
                  var result = JSON.parse(res._body);
                  if(result.status==200) {
                    $.unblockUI({ fadeOut: 200 });
                    $.notify('registration Sucessfull', 'success');
                  }else{
                    $.unblockUI({ fadeOut: 200 });
                    $.notify('error', 'error'); 
                  }
                },(err)=>{
                  $.unblockUI({ fadeOut: 200 });
                  $.notify(err, 'error'); 
                });
              });
            }
          });
        },8000);
      }
      });
    }
    
  }
}
