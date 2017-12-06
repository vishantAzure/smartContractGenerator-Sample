import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as config from '../../../../../../config/config';
import {NgForm} from '@angular/forms';

declare var $;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
    contract;
    addTemplate;
    User_data;
    dashboard;
    templatestatus;
    message;
    Category;
    selected;
    TemplateDetails;
    constructor(public router: Router,public http: Http,public route: ActivatedRoute) { 
      this.contract = {};
      this.route.queryParams.subscribe(params => {
        this.contract.id = params["idTemplates"];
       
    });
    }
  
    ngOnInit() {
      
      this.User_data = JSON.parse(localStorage.getItem('User'));
      if(this.User_data) {

        this.http.post('//'+config.global_ip+'/ApI/retrieveCategory',{id:this.User_data.idUsers}).subscribe((res:any)=>{
          let abc = JSON.parse(res._body).res;
          this.Category = [];
          for(var i=0;i<abc.length;i++) {
            if(abc[i].Status==1) {
              this.Category.push(abc[i]);
            }
          }
         },(err)=>{
          this.message='Data Not Found';
          setTimeout(function(){ 
            $('#message').modal('toggle');
          }, 1000);
         });

           this.http.post('//'+config.global_ip+'/ApI/getTemplateToUpdate',{id:this.contract.id}).subscribe((res:any)=>{
                var template_details = JSON.parse(res._body).res;                
                
                if(template_details.length == 0) {                    
                    
                }else {
                    this.TemplateDetails = template_details[0];
                    console.log(this.TemplateDetails.Category_Name);
                    
                }

           },(err)=>{
            
           });

    }else{
        console.log('ll');
    }
    }
  
    CreateTemplate() {
      let self = this;

      this.http.post('//'+config.global_ip+'/pdf/UpdateTemplate',this.TemplateDetails).subscribe((res:any)=>{
        this.contract={};  
        var result = JSON.parse(res._body);
      
        if(result.status==200) {
            self.router.navigate(['/admin/manageTemplate']);
        }
        },(err)=>{
          this.message = 'Table Not Found';
          setTimeout(function(){ 
            $('#message').modal('toggle');
          }, 1000);
        });
    }
  
  
  }
