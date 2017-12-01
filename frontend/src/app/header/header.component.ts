import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as config from '../../../../config/config';
import {NgForm} from '@angular/forms';

declare var $;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  model;
  User_data;
  dashboard;
  message;
  User = ['Customer','Service Provider'];
      constructor(public http: Http,public router: Router) { 
        this.model = {};
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
        this.message='Email or Password do not Match';
        setTimeout(function(){
          $('#messageheader').modal('toggle');
        }, 1000);
      }
    },(err)=>{
      this.message=err;
      setTimeout(function(){
        $('#messageheader').modal('toggle');
      }, 1000);
    });
  }

  Register() {
    $('#registermodal').modal('toggle');
    this.http.post('//'+config.global_ip+'/auth/signup',this.model).subscribe((res:any)=>{
      this.model = {};
      var result = JSON.parse(res._body);
      if(result.status==200) {
        this.message='Registration Sucessfull';
        setTimeout(function(){
          $('#messageheader').modal('toggle');
        }, 1000);
      }else{
        this.message='Registration UnSucessfull';
        setTimeout(function(){
          $('#messageheader').modal('toggle');
        }, 1000);
      }
    },(err)=>{
      this.message=err;
      setTimeout(function(){
        $('#messageheader').modal('toggle');
      }, 1000);
    });
  }
}
