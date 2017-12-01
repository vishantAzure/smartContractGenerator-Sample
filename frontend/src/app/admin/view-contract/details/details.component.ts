import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute}  from '@angular/router';
import * as config from '../../../../../../config/config';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './details.component.html',
  styleUrls: ['../../../../assets/css/contract_detail.css'],
})
export class ViewContractDetailComponent implements OnInit {
  ContractID;
  ContractDetails;

  constructor(public route: ActivatedRoute,public router: Router,public http: Http, private _location: Location) {
    this.route.queryParams.subscribe(params => {
      this.ContractID = params["contractID"];
    });
   }

  ngOnInit() {
    this.http.post('//'+config.global_ip+'/pdf/getContractById',{id:this.ContractID}).subscribe((res:any)=>{
      var contract_details = JSON.parse(res._body).res;
      this.ContractDetails = contract_details[0];
      console.log(contract_details);
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

    ChangeMilestoneStatus(id,status) {
        this.http.post('//'+config.global_ip+'/pdf/UpdateMilestoneStatus',{Mid:id,MStatus:status}).subscribe((res:any)=>{
          this.ngOnInit();
         },(err)=>{
          console.log(err);
        });
    }

    updateMilestone(id) {
        let navigationExtras = {
          queryParams: {
              "milestone_id": id
          }
        };
        this.router.navigate(["/editMilestone"], navigationExtras);
    }

 backClicked() {
        this._location.back();
    }

}
