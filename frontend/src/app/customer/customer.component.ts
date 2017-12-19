import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as config from '../../../../config/config';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
web3;
User_data;
dashboard;
Stats;
  constructor(public http: Http,public router: Router) { 
        
    }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
        if(this.User_data) {
            let obj = {
                id:this.User_data.idUsers
            }            
            this.http.post('//'+config.global_ip+'/pdf/getCustomerStats',obj).subscribe((res:any)=>{
                this.Stats = JSON.parse(res._body).res;
                console.log(this.Stats);
                console.log(this.Stats);
            },(err)=>{
                console.log(err);
            });
        }else {
            console.log("jjj");
        }
  
  }

}
