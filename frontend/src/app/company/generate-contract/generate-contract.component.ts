import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Template } from '../../modal';
import {Location} from '@angular/common';
import { Milestone } from '../../modal';
import * as config from '../../../../../config/config';
import * as _ from "lodash";
import { DatepickerModule } from 'angular2-material-datepicker';
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
  templateName;
  MilestoneName;
  preview;
  message;
  TemplateID;
  ContractName;
  ContractEmail;
  ContractPrice;
  ContractDate;
  customers;
  CustomerEmailAddress;
  Milestones;
  MilestoneID = 1;
  ContractEndDate;  
  constructor(public router: Router,public http: Http,public route: ActivatedRoute,private _location: Location) {
    this.Milestones = [];
    this.route.queryParams.subscribe(params => {
      this.TemplateID=params["TemplateID"];
  });
  this.Template = new Template();
   }

  ngOnInit() {
    this.Template.Date = '2017-11-17';
    this.User_data = JSON.parse(localStorage.getItem('User'));
    if(this.User_data) {
      switch(this.User_data.User_Type){
        case "Customer":
            this.dashboard='customer';
            break;
        case "Service_Provider":
            this.dashboard='serviceprovider';
            break;
        case "Company":
            this.dashboard='company';
            break;
        case "Admin":
            this.dashboard='admin';
            break;
        }
      let obj={TempID:this.TemplateID}

      this.http.post('//'+config.global_ip+'/pdf/getInputs',obj).subscribe((res:any)=>{        
        this.ContractName =  _.filter(JSON.parse(res._body).res, function(o) { return o.INPUT_FIELD=='ContractName' });
        this.ContractEmail =  _.filter(JSON.parse(res._body).res, function(o) { return o.INPUT_FIELD=='ContractEmail'});
        this.ContractPrice =  _.filter(JSON.parse(res._body).res, function(o) { return o.INPUT_FIELD=='ContractPrice'});
        this.ContractDate =  _.filter(JSON.parse(res._body).res, function(o) { return o.INPUT_FIELD=='ContractDate'; });
        this.Fields = _.filter(JSON.parse(res._body).res, function(o) { return o.INPUT_FIELD!=='ContractName' && o.INPUT_FIELD!=='ContractEmail' && o.INPUT_FIELD!=='ContractPrice' && o.INPUT_FIELD!=='ContractDate'; });
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


  PreviewContract() {
    
      if(this.CustomerEmailAddress == null) {
        this.message='Please Select Customer Email';
        $('#message').modal('toggle');
      }else{

        let self = this;
        this.ContractEmail[0].Value_Input = this.Template.email;
        this.ContractName[0].Value_Input = this.Template.ContractName;
        this.ContractPrice[0].Value_Input = this.Template.Price;
        this.ContractDate[0].Value_Input = this.Template.Date;

        let obj = {TemplateID:this.ContractEmail[0].IDTemplate,UID:this.User_data.idUsers,
          ContractName:this.Template.ContractName,CustomerEmail:this.CustomerEmailAddress,
          ContractPrice:this.Template.Price, ContractStartDate:this.Template.Date,ContractEndDate:this.Template.end_date
        };
        
        this.Fields.push(this.ContractDate[0] ,this.ContractEmail[0] ,this.ContractName[0] ,this.ContractPrice[0] );      
        this.http.post('//'+config.global_ip+'/pdf/preview',{fields:this.Fields,ID:obj,milestone:this.Milestones}).subscribe((res:any)=>{
          var result = JSON.parse(res._body);
    
          if(result.status==200) {
            console.log(result.res);
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
  }

  CreatePDF() {
    if(this.CustomerEmailAddress == null) {
      this.message='Please Select Customer Email';
      $('#message').modal('toggle');
    }else{

      let self = this;
      this.ContractEmail[0].Value_Input = this.Template.email;
      this.ContractName[0].Value_Input = this.Template.ContractName;
      this.ContractPrice[0].Value_Input = this.Template.Price;
      this.ContractDate[0].Value_Input = this.Template.Date;      
      
      let obj = {TemplateID:this.ContractEmail[0].IDTemplate,UID:this.User_data.idUsers,
        ContractName:this.Template.ContractName,CustomerEmail:this.CustomerEmailAddress,
        ContractPrice:this.Template.Price, ContractStartDate:this.Template.Date,ContractEndDate:this.Template.end_date
      };
      this.Fields.push(this.ContractDate[0] ,this.ContractEmail[0] ,this.ContractName[0] ,this.ContractPrice[0] );
      
      this.http.post('//'+config.global_ip+'/pdf/createPDF',{fields:this.Fields,ID:obj,milestone:this.Milestones}).subscribe((res:any)=>{
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
