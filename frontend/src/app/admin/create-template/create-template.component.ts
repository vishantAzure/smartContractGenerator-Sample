import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Contract } from '../../modal';
import * as config from '../../../../../config/config';
import {NgForm} from '@angular/forms';

declare var $;
@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
})
export class CreateTemplateComponent implements OnInit {
  contract;
  addTemplate;
  User_data;
  dashboard;
  Category;
  message;
  contractcategoryname;
  templatestatus;
  constructor(public router: Router,public http: Http,public route: ActivatedRoute) { 
    this.contract = {};
  }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
    if(this.User_data) {
      this.contract.status = 1;
      let self = this;
      let obj = {
        id:this.User_data.idUsers
      }
      this.http.post('//'+config.global_ip+'/ApI/retrieveCategory',obj).subscribe((res:any)=>{
        let abc = JSON.parse(res._body).res;
        self.Category = [];
        for(var i=0;i<abc.length;i++) {
          if(abc[i].Status==1) {
            self.Category.push(abc[i]);
          }
        }
       },(err)=>{
        this.message='Data Not Found';
        setTimeout(function(){ 
          $('#message').modal('toggle');
        }, 1000);
       });
  }else{
      console.log('ll');
  }
  }

  CreateTemplate() {
    if(!this.contract.Description) {
      this.message = 'description is required';
      $('#message').modal('toggle');
    }else{
      let self =  this;
      this.contract.User_id = this.User_data.idUsers;
      this.http.post('//'+config.global_ip+'/pdf/CreateTemplate',this.contract).subscribe((res:any)=>{
      this.contract={};  
      var result = JSON.parse(res._body);
      
      if(result.status==200) {
          self.router.navigate(['/admin/manageTemplate']);
      }
      },(err)=>{
        this.message = 'Server Error';
      $('#message').modal('toggle');
      });
    }
  }

}
