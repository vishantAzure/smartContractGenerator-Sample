import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute}  from '@angular/router';
import * as config from '../../../../../../config/config';
import {Location} from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-detail',
  templateUrl: './milestone_history.component.html',
})
export class ViewMilestoneHistory implements OnInit {
  MilestoneId;
  ContractDetails;

  constructor(public route: ActivatedRoute,public router: Router,public http: Http,private _location: Location) {
    this.route.queryParams.subscribe(params => {
      this.MilestoneId = params["milestone_id"];
  });
   }

  ngOnInit() {
    this.http.post('//'+config.global_ip+'/pdf/MilestoneHistory', {id:this.MilestoneId}).subscribe((res:any)=>{
      this.ContractDetails = JSON.parse(res._body).res;      
     },(err)=>{
      console.log(err);
     });
  }

  backClicked() {
    this._location.back();
  }

 
}
