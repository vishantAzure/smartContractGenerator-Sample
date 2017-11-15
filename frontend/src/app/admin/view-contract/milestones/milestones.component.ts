import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute}  from '@angular/router';
import * as config from '../../../../../../config/config';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-detail',
  templateUrl: './milestones.component.html',
})
export class MilestonesComponent implements OnInit {
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
     },(err)=>{
      console.log(err);
     });
  }

  ChangeMilestoneStatus(id,status) {
    this.http.post('//'+config.global_ip+'/pdf/UpdateMilestoneStatus',{id:id,Status:status}).subscribe((res:any)=>{
      this.ngOnInit();
     },(err)=>{
      console.log(err);
     });
  }


  viewMilestoneHistory(id) {
    let navigationExtras = {
      queryParams: {
          "milestone_id": id
      }
    };
    this.router.navigate(["/viewMilestoneHistory"], navigationExtras);
  }

  updateMilestone(id) {
    let navigationExtras = {
      queryParams: {
          "milestone_id": id
      }
    };
    this.router.navigate(["/editMilestone"], navigationExtras);
  }



}
