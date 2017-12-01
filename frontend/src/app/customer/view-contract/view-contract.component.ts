import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as config from '../../../../../config/config';

@Component({
  selector: 'app-view-customer-contract',
  templateUrl: './view-customer-contract.component.html'
})
export class ViewCustomerContractComponent implements OnInit {
  User_data;
  dashboard;
  Contracts;
  constructor(public router: Router,public http: Http) { }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
    if(this.User_data) {
      
      let obj = {
        id:this.User_data.idUsers
      }
      this.http.post('//'+config.global_ip+'/pdf/getCustomerContracts',obj).subscribe((res:any)=>{      
      if(JSON.parse(res._body).res.length > 0) {
        this.Contracts = JSON.parse(res._body).res;        
      }else {
        this.Contracts = null;
        }   
      
       },(err)=>{
        console.log(err);
       });
  }else{
      console.log('ll');
  }
  }

  viewMilestones(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "contractID": id
      }
    };
    this.router.navigate(["/customer/ViewMilestones"], navigationExtras);
  }

 viewContractDetails(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "contractID": id
      }
    };
    this.router.navigate(["/customer/viewContractDetails"], navigationExtras);
  }

  DownloadPDF(name,id) {
    console.log(name,id);
    window.open('//'+config.global_ip+'/pdf/DownloadPDF?pname='+name+'.pdf');
  }

}
