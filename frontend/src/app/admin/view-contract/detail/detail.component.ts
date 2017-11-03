import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute}  from '@angular/router';
import * as config from '../../../../../../config/config';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  ContractID;
  ContractDetails;

  constructor(public route: ActivatedRoute,public router: Router,public http: Http) {
    this.route.queryParams.subscribe(params => {
      this.ContractID = params["contractID"];
  });
   }

  ngOnInit() {
    this.http.post('//'+config.global_ip+'/pdf/Milestones',{id:this.ContractID}).subscribe((res:any)=>{
      this.ContractDetails = JSON.parse(res._body).res;
      console.log(this.ContractDetails);
     },(err)=>{
      console.log(err);
     });
  }

  MarkMilestoneComplete(id) {

  }

  CancelMilestone(ig) {

  }

}
