import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Modal } from '../modal';
import { ToasterService} from 'angular2-toaster';
import * as config from '../../../../config/config';
import {NgForm} from '@angular/forms';

declare var $;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  private toasterService: ToasterService;
  model;
  User_data;
  dashboard;
  message;
  User = ['Customer','Service Provider','Company'];
      constructor(public http: Http,public router: Router ,toasterService: ToasterService) { 
        this.toasterService = toasterService;
        this.model = new Modal();
      }
    
  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
    if(this.User_data) {
      switch(this.User_data.User_Type){
      case "Customer":
          this.dashboard='customer';
          break;
      case "Service Provider":
          this.dashboard='serviceprovider';
          break;
      case "Company":
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
    window.location.reload();
  }

  Toggle() {
    $("#dropdown").toggle();
  }

  formreset(f:NgForm) {
    f.resetForm();
  }

  Login() {
    $('#myModal1111').modal('toggle');
    let obj ={email:this.model.email,password:this.model.password}

    this.http.post('//'+config.global_ip+'/auth/login',obj).subscribe((res:any)=>{
      this.model = {};
      var result = JSON.parse(res._body);

      if(result.status==200) {
        localStorage.setItem("User", JSON.stringify(result.res[0]));
        switch(result.res[0].User_Type){
          case "Customer":
              this.router.navigate(['/customer']);
              break;
          case "Service Provider":
              this.router.navigate(['/serviceprovider']);
              break;
          case "Company":
              this.router.navigate(['/company']);
              break;
          case "Admin":
              this.router.navigate(['/admin']);
              break;
        }
      }else if(result.status==300) {
        this.message='Email or Password do not Match';
        $('#messageheader').modal('toggle');
        setTimeout(function(){ 
          $('#messageheader').modal('toggle');
        }, 2000);
      }
    },(err)=>{
      this.message=err;
      $('#messageheader').modal('toggle');
      setTimeout(function(){ 
        $('#messageheader').modal('toggle');
      }, 2000);
    });
  }

  Register() {
    $('#myModal2222').modal('toggle');
    let obj;

    if(this.model.user_type=='company') {
      obj ={firstname:this.model.firstname,lastname:'Company',email:this.model.email,
        password:this.model.password,phone:this.model.phone,type:this.model.user_type}
    }else{
      obj ={firstname:this.model.firstname,lastname:this.model.lastname,email:this.model.email,
        password:this.model.password,phone:this.model.phone,type:this.model.user_type}
    }

    this.http.post('//'+config.global_ip+'/auth/signup',obj).subscribe((res:any)=>{
      this.model = {};
      var result = JSON.parse(res._body);
      if(result.status==200) {
        this.message='Registration Sucessfull';
        $('#messageheader').modal('toggle');
        setTimeout(function(){ 
          $('#messageheader').modal('toggle');
        }, 1000);
      }else{
        this.message='Registration UnSucessfull';
        $('#messageheader').modal('toggle');
        setTimeout(function(){ 
          $('#messageheader').modal('toggle');
        }, 1000);
      }
    },(err)=>{
      this.message=err;
      $('#messageheader').modal('toggle');
      setTimeout(function(){ 
        $('#messageheader').modal('toggle');
      }, 1000);
    });
  }
}
