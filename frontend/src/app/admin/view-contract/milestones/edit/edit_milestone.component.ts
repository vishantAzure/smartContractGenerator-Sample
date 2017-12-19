import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as config from '../../../../../../../config/config';
import { IMyOptions, IMyDateModel } from 'mydatepicker';
import { Location } from '@angular/common';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';

declare var $;
@Component({
    selector: 'app-edit',
    templateUrl: './edit_milestone.component.html',
})
export class EditMilestoneComponent implements OnInit {
    MilestoneId;
    MilestoneDetails;
    User_data;
    validated;
    myOptions: IMyOptions = {
        dateFormat: 'yyyy.mm.dd',
    };
    constructor(public route: ActivatedRoute, public router: Router, public http: Http, private _location: Location) {
        this.MilestoneDetails = {};
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
                this.MilestoneDetails.End_Date = {
                    date: {
                        year: new Date(this.MilestoneDetails.End_Date).getFullYear(),
                        month: new Date(this.MilestoneDetails.End_Date).getMonth() + 1,
                        day: new Date(this.MilestoneDetails.End_Date).getDate()
                    }
                };
                this.MilestoneDetails.Start_Date = {
                    date: {
                        year: new Date(this.MilestoneDetails.Start_Date).getFullYear(),
                        month: new Date(this.MilestoneDetails.Start_Date).getMonth() + 1,
                        day: new Date(this.MilestoneDetails.Start_Date).getDate()
                    }
                };
                let strtdate = this.getCopyOfOptions();
                strtdate.disableSince = this.MilestoneDetails.Start_Date.date;
                this.myOptions = strtdate;
                let enddate = this.getCopyOfOptions();
                enddate.disableUntil = this.MilestoneDetails.End_Date.date;
                this.myOptions = enddate;
           },(err)=>{

           });
        }else{
          console.log('ll');
        }
    }

    backClicked() {
        this._location.back();
    }

    getCopyOfOptions(): IMyOptions {
        return JSON.parse(JSON.stringify(this.myOptions));
    }

    validateAmount() {
        
    }

    UpdateMilestone() {
        this.MilestoneDetails.Start_Date = moment(this.MilestoneDetails.Start_Date.formatted).format();
        this.MilestoneDetails.End_Date = moment(this.MilestoneDetails.End_Date.formatted).format();
            
            this.http.post('//'+config.global_ip+'/pdf/validateAmount',this.MilestoneDetails).subscribe((res:any)=>{
                var validated = JSON.parse(res._body);
                
                if(validated.status) {
                    this.http.post('//'+config.global_ip+'/pdf/updateMilestone',this.MilestoneDetails).subscribe((res:any)=>{
                        var result = JSON.parse(res._body);
                        if(result.status==200) {
                            let navigationExtras = {
                            queryParams: {
                                "contractID": result.res.Contract_ID
                            }
                            };
                            this.router.navigate(["/viewContractDetails"], navigationExtras);
                        }

                    },(err)=>{
                        $.notify("Unable to update milestone", 'error');
                    });

                }else {
                    $.notify(validated.error_message, 'error');  
                }

            
            },(err)=>{
                $.notify("could not validate milestone", 'error');  
            });
    }
}
