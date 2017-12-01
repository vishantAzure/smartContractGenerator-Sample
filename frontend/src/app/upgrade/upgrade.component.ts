import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router}  from '@angular/router';
import * as config from '../../../../config/config';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
})
export class UpgradeComponent implements OnInit {
  User_data;
  dashboard;
  Subscriptions;
  constructor(public http: Http,public router: Router) { }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
    if(this.User_data) {
      switch(this.User_data.User_Type){
      case "Customer":
          this.dashboard='customer';
          break;
      case "Service_Provider":
          this.dashboard='company';
          break;
      case "Admin":
          this.dashboard='admin';
          break;
      }
      let obj ={
        id:this.User_data.idUsers
      }
      this.http.post('//'+config.global_ip+'/ApI/AdminviewSubscription',obj).subscribe((res:any)=>{
        this.Subscriptions = JSON.parse(res._body).res;
       },(err)=>{
        console.log(err);
       });
  }else{
      console.log('ll');
  }
  }

  Upgrade(id) {
    console.log(id);
  }

}
