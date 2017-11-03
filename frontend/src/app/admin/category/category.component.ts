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
addCategory;
radio;
contract;
Category;
User_data;
message;
cnfrmDeleteID;
dashboard;
ParentCategory;
CategoryStatus;
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
        for(var i=0;i<result.res.length;i++) {
          if(result.res[i].parent_category==0) {
            self.ParentCategory.push(result.res[i]);
            console.log(self.ParentCategory);
          }
        }
      }
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

  CreateCategory() {
    let self = this;
    $('#myModal1').modal('toggle');
    
    this.http.post('//'+config.global_ip+'/ApI/addCategory',this.contract).subscribe((res:any)=>{
      this.contract = {};
      var result = JSON.parse(res._body);

        if(result.status==200) {
          this.ngOnInit();
        }
        },(err)=>{
        this.contract = {};
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

  EditCategory() {
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
      $('#message').modal('toggle');
      setTimeout(function(){ 
        $('#message').modal('toggle');
      }, 1000);
      });
  }


  changeModal(e) {
    this.addCategory = e.name;
    this.contract.name = e.name;
    this.contract.ID = e.id_template_category;
    if(e.Status==0) {
      this.contract.status = 'InActive';
    }else{
      this.contract.status = 'Active';
    }
    var $radios = $('input:radio[name=categorystatus]');
    if($radios.is(':checked') === false) {
        $radios.filter('[value='+this.contract.status +']').prop('checked', true);
    }
    this.contract.parentcategoryname = e.parent_category_name;
  }

}
