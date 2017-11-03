import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Contract } from '../../modal';
import { ToasterService} from 'angular2-toaster';
import * as config from '../../../../../config/config';
import {NgForm} from '@angular/forms';

declare var $;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  private toasterService: ToasterService;
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
  constructor(public router: Router,public http: Http,toasterService: ToasterService) { 
    this.toasterService = toasterService;
    this.contract = new Contract();
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
      }
      },(err)=>{
      this.message='Data Not Found';
      $('#message').modal('toggle');
      setTimeout(function(){ 
        $('#message').modal('toggle');
      }, 1000);
      });

    this.http.post('//'+config.global_ip+'/ApI/retrieveParentCategory',obj).subscribe((res:any)=>{

      let result = JSON.parse(res._body);
      if(result.status==200) {
        self.ParentCategory = result.res;
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
    
     if(!this.addCategory) {

      this.contract['status']= this.CategoryStatus;
      this.contract['icon']='jpg';
      this.http.post('//'+config.global_ip+'/ApI/addParentCategory',this.contract).subscribe((res:any)=>{
        this.contract = {};
        var result = JSON.parse(res._body);
        
          if(result.status==200) {
            this.message='Category Inserted';
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
          this.contract = {};
          this.message='Table Not Found';
          $('#message').modal('toggle');
          setTimeout(function(){ 
            $('#message').modal('toggle');
          }, 1000);

          });

    }else{

      this.contract['parentCategory']= this.addCategory;
      this.contract['status']= this.CategoryStatus;
      this.contract['icon']='jpg';
      this.http.post('//'+config.global_ip+'/ApI/addCategory',this.contract).subscribe((res:any)=>{
        this.contract = {};
        var result = JSON.parse(res._body);
      
        if(result.status==200) {
          this.message='Category Inserted';
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
        this.contract = {};
        this.message='Table Not Found';
        $('#message').modal('toggle');
        setTimeout(function(){ 
          $('#message').modal('toggle');
        }, 1000);
        });
    }
  }

  formreset(f:NgForm) {
    f.resetForm();
  }

  EditCategory() {
    $('#myModal2').modal('toggle');

      this.contract['parentCategory']= this.addCategory;
      this.contract['status']= this.CategoryStatus;
      this.contract['icon']='jpg';
      this.http.post('//'+config.global_ip+'/ApI/editCategory',this.contract).subscribe((res:any)=>{
        this.contract = {};
        var result = JSON.parse(res._body);
      
        if(result.status==200) {
          this.message='Category Updated';
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
        this.message='Category Deleted';
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


  changeModal(e) {
    this.addCategory =e.Parent_Category;
    this.contract['icon']= e.Icon;
    this.contract['status']= e.Status;
    var $radios = $('input:radio[name=categorystatus]');
    if($radios.is(':checked') === false) {
        $radios.filter('[value='+e.Status+']').prop('checked', true);
    }
    this.contract.Name = e.Category_Name;
    this.contract['id'] = e.idTemplateCategory;
  }

}
