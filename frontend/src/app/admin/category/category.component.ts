import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as config from '../../../../../config/config';
import {NgForm} from '@angular/forms';

declare var $;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
contract;
Category;
User_data;
message;
cnfrmDeleteID;
dashboard;
ParentCategory;
  constructor(public router: Router,public http: Http) { 
    this.contract = {};    
    this.ParentCategory = [];
  }

  ngOnInit() {
    let self = this;
    this.User_data = JSON.parse(localStorage.getItem('User'));
    if(this.User_data) {
      let obj = {
        id:this.User_data.idUsers
      }
    this.http.post('//'+config.global_ip+'/ApI/retrieveCategory',obj).subscribe((res:any)=>{

      let result = JSON.parse(res._body);
      if(result.status==200) {
        self.Category = result.res;
        self.ParentCategory = [];
        for(var i=0;i<result.res.length;i++) {
          if(result.res[i].Status==1) {
            self.ParentCategory.push(result.res[i]);
          }
        }
      }
      },(err)=>{
      console.log(err);
      });
  }else{
      console.log('ll');
  }
  }

  CreateCategory(form:NgForm) {
    let self = this;
    $('#myModal1').modal('toggle');
    this.http.post('//'+config.global_ip+'/ApI/addCategory',this.contract).subscribe((res:any)=>{
      var result = JSON.parse(res._body);

        if(result.status==200) {
          form.resetForm();
          this.ngOnInit();
        }
        },(err)=>{
        form.resetForm();
        this.message='Table Not Found';
        setTimeout(function(){ 
          $('#message').modal('toggle');
        }, 1000);
    });
  }

  formreset(form:NgForm) {
    console.log('reset');
    form.resetForm();
  }

  SelectRadio() {
    // this.contract.parentcategory = 1;
    this.contract.status=1;
  }

  EditCategory() {
    console.log(this.contract);
    $('#myModal3').modal('toggle');
      this.http.post('//'+config.global_ip+'/ApI/editCategory',this.contract).subscribe((res:any)=>{
        this.contract = {};
        var result = JSON.parse(res._body);
      
        if(result.status==200) {
          this.ngOnInit();
        }
        },(err)=>{
        this.contract = {};
        this.message='Table Not Found';
        setTimeout(function(){ 
          $('#message').modal('toggle');
        }, 1000);
        });
  }

  ConfirmDelete(id,status) {
    if(status!=0) {
      this.message='This Category Cannot be Deleted';
      $('#message').modal('toggle');
    }else{
      $('#cnfrmDelete').modal('toggle');
      this.cnfrmDeleteID = id;
    }
  }

  DeleteCategory() {
    $('#cnfrmDelete').modal('toggle');
    let obj = {id:this.cnfrmDeleteID}

    this.http.post('//'+config.global_ip+'/ApI/DeleteCategory',obj).subscribe((res:any)=>{
      var result = JSON.parse(res._body);
      
      if(result.status==200) {
        this.ngOnInit();
      }
      },(err)=>{
      this.message='Table Not Found';
      setTimeout(function(){ 
        $('#message').modal('toggle');
      }, 1000);
      });
  }


  changeModal(e) {
    this.contract.parentcategory = e.parent_category;
    this.contract.name = e.name;
    this.contract.ID = e.id;
    this.contract.status = e.Status;
  }

}