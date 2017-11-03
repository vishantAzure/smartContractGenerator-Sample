import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router}  from '@angular/router';
import * as config from '../../../../../../config/config';
import {NgForm} from '@angular/forms';

declare var $;
@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
})
export class ManageCompanyComponent implements OnInit {
  User_data;
  model;
  cnfrmDeleteID;
  dashboard;
  Company;
  message;
  constructor(public http: Http,public router: Router) {
    this.model={};
  }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
    if(this.User_data) {
     
      let obj = {
        id:this.User_data.idUsers
      }
      this.http.post('//'+config.global_ip+'/auth/company',obj).subscribe((res:any)=>{
        this.Company = JSON.parse(res._body).res;
      },(err)=>{
        this.message='Data Not Found';
        $('#message').modal('toggle');
        setTimeout(function(){ 
          $('#message').modal('toggle');
        }, 1000);
      });
  }else{
      console.log('ll');
  }
  }

  changeModal(e) {
    this.model = e;
  }

  AddCompany() {
    let self = this;
    $('#myModal1').modal('toggle');
    this.model.type='Company';
    this.http.post('//'+config.global_ip+'/auth/signup',this.model).subscribe((res:any)=>{
      this.model = {};
      var result = JSON.parse(res._body);
      if(result.status==200) {
          self.ngOnInit();
      }
    },(err)=>{
      this.message='Registration UnSucessfull';
      $('#message').modal('toggle');
      setTimeout(function(){ 
        $('#message').modal('toggle');
      }, 1000);
    });

  }

  EditComapny() {
    $('#myModal3').modal('toggle');
    let self = this;

    this.http.post('//'+config.global_ip+'/auth/update',this.model).subscribe((res:any)=>{
      this.model = {};
      var result = JSON.parse(res._body);

      if(result.status==200) {
          self.ngOnInit();
      }
      },(err)=>{
        this.message='Table Not Found';
        $('#message').modal('toggle');
        setTimeout(function(){ 
          $('#message').modal('toggle');
        }, 1000);
      });
  }

  ConfirmDelete(id) {
    $('#cnfrmDelete').modal('toggle');
    this.cnfrmDeleteID = id;
  }

  DeleteCompany() {
    let self = this;
    $('#cnfrmDelete').modal('toggle');
    let obj ={
      id:this.cnfrmDeleteID
    }
    this.http.post('//'+config.global_ip+'/auth/delete',obj).subscribe((res:any)=>{
      var result=JSON.parse(res._body);

      if(result.status==200) {
          self.ngOnInit();
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

}
