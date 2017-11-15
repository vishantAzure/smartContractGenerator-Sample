import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as config from '../../../../../../../config/config';
import {Location} from '@angular/common';
import {NgForm} from '@angular/forms';

declare var $;
@Component({
  selector: 'app-edit',
  templateUrl: './edit_milestone.component.html',
})
export class EditMilestoneComponent implements OnInit {
    MilestoneId;
    MilestoneDetails;
    User_data;    
    constructor(public route: ActivatedRoute,public router: Router,public http: Http,private _location: Location) {
        this.route.queryParams.subscribe(params => {
            this.MilestoneId = params["milestone_id"];
        });
    }
  
    ngOnInit() {
        
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if(this.User_data) {
            this.http.post('//'+config.global_ip+'/pdf/getMilestoneToUpdate',{id:this.MilestoneId}).subscribe((res:any)=>{
                var milestone_details = JSON.parse(res._body).res;                
                if(milestone_details.length == 0) {
                    this.router.navigate(["/company/ViewContract"]);
                }else {
                    this.MilestoneDetails = milestone_details[0];
                    console.log(this.MilestoneDetails);
                }

           },(err)=>{
            
           });
        }else{
          console.log('ll');
        }
    }

    backClicked() {
        this._location.back();
      }

    UpdateMilestone() {
        this.http.post('//'+config.global_ip+'/pdf/updateMilestone',this.MilestoneDetails).subscribe((res:any)=>{
        
        var result = JSON.parse(res._body);
        console.log(result);
        if(result.status==200) {
            let navigationExtras = {
            queryParams: {
                "contractID": result.res.Contract_ID
            }
          };
          this.router.navigate(["/viewContractDetails"], navigationExtras);
        }
      
        },(err)=>{
            $('#message').modal('toggle');
        });
    }

  
  }
