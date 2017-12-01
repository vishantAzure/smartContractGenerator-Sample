import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Template } from '../../modal';
import { Location } from '@angular/common';
import { Milestone } from '../../modal';
import * as config from '../../../../../config/config';
import {IMyOptions, IMyDateModel} from 'mydatepicker';
import * as _ from "lodash";
declare var $;
@Component({
  selector: 'app-generate-contract',
  templateUrl: './generate-contract.component.html',
    
})
export class GenerateContractComponent implements OnInit {
  User_data;
  Fields;
  Template;
  dashboard;
  preview;
  message;
  customers;
  Milestones;
  MilestoneID = 1;
  myOptions: IMyOptions = {
    dateFormat: 'yyyy.mm.dd',
  };
  constructor(public router: Router,public http: Http,public route: ActivatedRoute,private _location: Location) {
    this.Milestones = [];
    this.Template = {};
    this.route.queryParams.subscribe(params => {
      this.Template.ID=params["TemplateID"];
  });
   }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
    this.Template.UID = this.User_data.idUsers;
    if(this.User_data) {
      switch(this.User_data.User_Type){
        case "Customer":
            this.dashboard='customer';
            break;
        case "Service Provider":
            this.dashboard='company';
            break;
        case "Admin":
            this.dashboard='admin';
            break;
        }
      let obj={TempID:this.Template.ID}

      this.http.post('//'+config.global_ip+'/pdf/getInputs',obj).subscribe((res:any)=>{        
        this.Fields = JSON.parse(res._body).res;
        console.log(this.Fields);
       },(err)=>{
        console.log(err);
       });
       this.http.post('//'+config.global_ip+'/auth/customer',obj).subscribe((res:any)=>{
        this.customers = JSON.parse(res._body).res;
       },(err)=>{
        console.log(err);
       });
  }else{
      console.log('ll');
  }
  }

  backClicked() {
    this._location.back();
  }

  disableUntil(e) {
    let copy = this.getCopyOfOptions();
    copy.disableUntil = e.date;
    this.myOptions = copy;
  }

  disableSince(e) {
    let copy = this.getCopyOfOptions();
    copy.disableSince = e.date;
    this.myOptions = copy;
  }

getCopyOfOptions(): IMyOptions {
    return JSON.parse(JSON.stringify(this.myOptions));
}

PreviewContract() {
      
  this.http.post('//'+config.global_ip+'/pdf/preview',{fields:this.Fields,ID:this.Template,milestone:this.Milestones}).subscribe((res:any)=>{
    var result = JSON.parse(res._body);

    if(result.status==200) {
      this.preview = result.res;
      $('#myModal222222').modal('toggle');
    }else{
      this.message='UnSucessfull';
      $('#message').modal('toggle');
    }
  },(err)=>{
    this.message=err;
    $('#message').modal('toggle');
  });

}

  CreatePDF() {
    let self = this;
    this.http.post('//'+config.global_ip+'/pdf/createPDF',{fields:this.Fields,ID:this.Template,milestone:this.Milestones}).subscribe((res:any)=>{
      var result = JSON.parse(res._body);

      if(result.status==200) {
        self.router.navigate(['/'+self.dashboard+'/ViewContract']);
      }else{
        this.message='UnSucessfull';
        $('#message').modal('toggle');
      }
    },(err)=>{
      this.message=err;
      $('#message').modal('toggle');
    });
  }

  AddMilestone() {
  let ABC = new Milestone();
  ABC.ID = this.MilestoneID;
  this.MilestoneID++;
  this.Milestones.push(ABC);
  }

  RemoveMilestone() {
    this.Milestones.pop();
    this.MilestoneID--;
  }

}
