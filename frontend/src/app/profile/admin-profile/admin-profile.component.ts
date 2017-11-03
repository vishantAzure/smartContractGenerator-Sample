import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Modal } from '../../modal';
import * as config from '../../../../../config/config';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
})
export class AdminProfileComponent implements OnInit {
  model;
  User_data;
  dashboard;
  User = ['Select User','Customer','Service_Provider','Company'];
  constructor(public http: Http,public router: Router) { 
    this.model = new Modal();
  }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
    this.model = this.User_data;
  }

  onChange(e){
    this.model.user_type =e;
  }

  Update() {
    let obj ={
      firstname:this.model.firstname,
      lastname:this.model.lastname,
      email:this.model.email,
      password:this.model.password,
      phone:this.model.phone,
      type:this.model.user_type
    }
    this.http.post('//'+config.global_ip+'/auth/ProfileUpdate',obj).subscribe((res:any)=>{
        window.location.reload();
    },(err)=>{
    console.log(err);
    });
  }

}
