import { Component, OnInit } from '@angular/core';
import { subscriptionPlan } from '../../modal';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router}  from '@angular/router';
import * as config from '../../../../../config/config';
import {NgForm} from '@angular/forms';

declare var $;
@Component({
  selector: 'app-manage-subscription',
  templateUrl: './manage-subscription.component.html'
})
export class ManageSubscriptionComponent implements OnInit {
  subscriptionPlan;
  User_data;
  subscriptionstatus;
  modalData;
  ViewSubscription;
  message;
  dashboard;
  cnfrmDeleteID;
  constructor(public http: Http,public router: Router) { 
    this.subscriptionPlan = new subscriptionPlan();
  }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
    if(this.User_data) {
      let obj = {
        id:this.User_data.idUsers
      }
      this.http.post('//'+config.global_ip+'/ApI/AdminviewSubscription',obj).subscribe((res:any)=>{
        this.ViewSubscription = JSON.parse(res._body).res;
      },(err)=>{
        this.message='Table Not Found';
        $('#message').modal('toggle');
        setTimeout(function(){ 
          $('#message').modal('toggle');
        }, 1000);
      });
  }else{
      console.log('ll');
  }
  }

  AddSubscriptionPlan() {
    $('#myModal3').modal('toggle');
    let obj ={packageName:this.subscriptionPlan.packageName,packagePrice:this.subscriptionPlan.packagePrice,
      numberOfContract:this.subscriptionPlan.numberOfContract,renewalFrequency:this.subscriptionPlan.renewalFrequency,
      primaryKey:this.User_data.idUsers,packagestatus:this.subscriptionstatus
    }

    this.http.post('//'+config.global_ip+'/ApI/AdminManageSubscription',obj).subscribe((res:any)=>{
      this.subscriptionPlan ={};
      var result = JSON.parse(res._body);
      
      if(result.status==200) {
        this.message='User Updated';
        $('#message').modal('toggle');
        setTimeout(function(){ 
          window.location.reload();
        }, 1000);
      }else{
        this.message='Table Not Found';
        $('#message').modal('toggle');
        setTimeout(function(){ 
          $('#message').modal('toggle');
        }, 1000);
      }
      },(err)=>{
        this.message='Table Not Found';
        $('#message').modal('toggle');
        setTimeout(function(){ 
          $('#message').modal('toggle');
        }, 1000);
      });
  }

  formreset(f:NgForm) {
    f.resetForm();
  }

  changeModal(e) {
    this.modalData =e.idSubscriptions;
    this.subscriptionPlan.packageName = e.packageName;
    this.subscriptionPlan.packagePrice = e.packagePrice;
    this.subscriptionPlan.numberOfContract= e.numberOfContract;
    this.subscriptionPlan.renewalFrequency = e.renewalFrequency;
    var $radios = $('input:radio[name=status]');
    if($radios.is(':checked') === false) {
        $radios.filter('[value='+e.Status+']').prop('checked', true);
    }
  }

  EditSubscription() {
    $('#myModal4').modal('toggle');
    let obj ={packageName:this.subscriptionPlan.packageName,packagePrice:this.subscriptionPlan.packagePrice,
      numberOfContract:this.subscriptionPlan.numberOfContract,renewalFrequency:this.subscriptionPlan.renewalFrequency,
      primaryKey:this.User_data.idUsers,packagestatus:this.subscriptionstatus
    }

    this.http.post('//'+config.global_ip+'/ApI/AdminUpdateSubscription',obj).subscribe((res:any)=>{
      this.subscriptionPlan ={};
      var result = JSON.parse(res._body);
      
      if(result.status==200) {
        this.message='User Updated';
        $('#message').modal('toggle');
        setTimeout(function(){ 
          window.location.reload();
        }, 1000);
      }else{
        this.message='Table Not Found';
        $('#message').modal('toggle');
        setTimeout(function(){ 
          $('#message').modal('toggle');
        }, 1000);
      }
      },(err)=>{
        this.message='Table Not Found';
        $('#message').modal('toggle');
        setTimeout(function(){ 
          $('#message').modal('toggle');
        }, 1000);
      });
  }

  ConfrmDelete(id) {
    $('#cnfrmDelete').modal('toggle');
    this.cnfrmDeleteID = id;
  }

  DeleteSubscription() {
    $('#cnfrmDelete').modal('toggle');
    let obj = {id:this.cnfrmDeleteID }

    this.http.post('//'+config.global_ip+'/ApI/AdminDeleteSubscription',obj).subscribe((res:any)=>{
     var result = JSON.parse(res._body);
      
      if(result.status==200) {
        this.message='User Updated';
        $('#message').modal('toggle');
        setTimeout(function(){ 
          window.location.reload();
        }, 1000);
      }else{
        this.message='Table Not Found';
        $('#message').modal('toggle');
        setTimeout(function(){ 
          $('#message').modal('toggle');
        }, 1000);
      }
      },(err)=>{
        this.message='Table Not Found';
        $('#message').modal('toggle');
        setTimeout(function(){ 
          $('#message').modal('toggle');
        }, 1000);
      });
  }

  Close() {
    this.subscriptionPlan={};
  }

}

