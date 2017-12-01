import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as config from '../../../../../config/config';

declare var $;
@Component({
  selector: 'app-adminchangepass',
  templateUrl: './adminchangepass.component.html',
})
export class AdminchangepassComponent implements OnInit {
  User_data;
  dashboard;
  message;
  model;
  constructor(public http: Http,public router: Router ) { 
    this.model = {
      CurrentPass:'',
      NewPass:'',
      CnfrmPass:'',
      id:''
    }
  }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
    if(this.User_data) {
      switch(this.User_data.User_Type){
      case "Customer":
          this.dashboard='customer';
          break;
      case "Service_Provider":
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


  ChangPass() {

    if(this.model.CnfrmPass == this.model.NewPass) {

      this.model.id = this.User_data.idUsers;
      this.http.post('//'+config.global_ip+'/auth/changepass',this.model).subscribe((res:any)=>{
        var result = JSON.parse(res._body);
        if(result.status==200) {
            this.message='Password Changed';
            $('#message').modal('toggle');
            setTimeout(function(){ 
              $('#message').modal('toggle');
            }, 2000);
        }
        else if(result.status==300){
          this.message='Wrong Password';
          $('#message').modal('toggle');
          setTimeout(function(){ 
            $('#message').modal('toggle');
          }, 2000);
        }
      },(err)=>{
        this.message=err;
        $('#message').modal('toggle');
        setTimeout(function(){ 
          $('#message').modal('toggle');
        }, 2000);
      });
    }else{
      this.message='Password do not Match';
      $('#message').modal('toggle');
      setTimeout(function(){ 
        $('#message').modal('toggle');
      }, 2000);
    }
  }

  isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }

}
