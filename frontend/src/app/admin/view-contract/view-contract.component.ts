import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as config from '../../../../../config/config';
import * as moment from 'moment';

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.component.html'
})
export class ViewContractComponent implements OnInit {
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
      this.Contracts=[];
      this.http.post('//'+config.global_ip+'/pdf/pdfs',obj).subscribe((res:any)=>{
        this.Contracts = JSON.parse(res._body).res;
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
    this.router.navigate(["/viewMilestones"], navigationExtras);
  }

 viewContractDetails(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "contractID": id
      }
    };
    this.router.navigate(["/viewContractDetails"], navigationExtras);
  }

  DownloadPDF(name) {
    window.open('//'+config.global_ip+'/pdf/DownloadPDF?pname='+name+'.pdf');
  }

}
