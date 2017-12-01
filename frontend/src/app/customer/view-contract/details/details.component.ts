import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute}  from '@angular/router';
import * as config from '../../../../../../config/config';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

declare var $;
@Component({
    selector: 'app-detail',
    templateUrl: './details.component.html',
    styleUrls: ['../../../../assets/css/contract_detail.css'],
})
export class ViewCustomerContractDetailComponent implements OnInit {
    ContractID;
    ContractDetails;
    CancelData;

    constructor(public route: ActivatedRoute,public router: Router,public http: Http) {
      this.CancelData = {};
      this.route.queryParams.subscribe(params => {
        this.ContractID = params["contractID"];
      });
    }

  ngOnInit() {
    this.http.post('//'+config.global_ip+'/pdf/getContractById',{id:this.ContractID}).subscribe((res:any)=>{
      var contract_details = JSON.parse(res._body).res;
      this.ContractDetails = contract_details[0];
      console.log(this.ContractDetails);
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

  Cancel(id,status) {
    this.CancelData.CancelID = id;
    this.CancelData.CancelStatus = status;
    $('#reasoncancel').modal('toggle');
  }

  ReasonUpdate() {
    this.http.post('//'+config.global_ip+'/pdf/UpdateMilestoneStatus',{Mid:this.CancelData.CancelID,MStatus:this.CancelData.CancelStatus,reason:this.CancelData.ReasonCancel}).subscribe((res:any)=>{
      $('#reasoncancel').modal('toggle'); 
      this.CancelData = {}; 
    this.ngOnInit();
     },(err)=>{
      console.log(err);
     });
  }

  Formreset() {
    $('#reasoncancel').modal('toggle'); 
    this.CancelData = {};
  }

}
