import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router}  from '@angular/router';
import * as config from '../../../../config/config';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
    Stats;
    User_data;
    constructor(public http: Http,public router: Router) { 
        
    }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
    if(this.User_data) {
        let obj = {
                id:this.User_data.idUsers
            }            
        this.http.post('//'+config.global_ip+'/pdf/getStats',obj).subscribe((res:any)=>{
            this.Stats = JSON.parse(res._body).res[0];            
        },(err)=>{
            console.log(err);
        });
    }else {
        console.log("jjj");
    }
  }

}
