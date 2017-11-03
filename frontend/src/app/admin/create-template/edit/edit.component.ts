import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Contract } from '../../../modal';
import { ToasterService} from 'angular2-toaster';
import * as config from '../../../../../../config/config';
import {NgForm} from '@angular/forms';

declare var $;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
    private toasterService: ToasterService;
    contract;
    addTemplate;
    User_data;
    dashboard;
    templatestatus;
    message;
    contractcategoryname;
    Category;
    constructor(public router: Router,public http: Http,toasterService: ToasterService,public route: ActivatedRoute) { 
      this.toasterService = toasterService;
      this.contract = new Contract();
      this.route.queryParams.subscribe(params => {
        this.contract['id'] = params["idTemplates"];
        this.contract.Name=params["TemplateName"];
        this.contract['categoryName']= params["Category_Name"];
        this.contract.Description = params["Description"];
        this.contract['status']=params["Status"];
    });
    }
  
    ngOnInit() {
      var $radios = $('input:radio[name=rbnNumber]');
      $radios.filter('[value='+this.contract['status']+']').prop('checked', true);
      this.User_data = JSON.parse(localStorage.getItem('User'));
      if(this.User_data) {
        
        let obj = {
          id:this.User_data.idUsers
        }
        this.http.post('//'+config.global_ip+'/ApI/retrieveCategory',obj).subscribe((res:any)=>{
          this.Category = JSON.parse(res._body).res;
          console.log(this.Category);
         },(err)=>{
          this.message='Data Not Found';
          $('#message').modal('toggle');
          setTimeout(function(){ 
            $('#message').modal('toggle');
          }, 1000);
         });
    }else{
        console.log('ll');
    }
    }
  
    CreateTemplate() {
      let self = this;
      this.contract['categoryName'] = this.contractcategoryname;
      this.contract['status']= this.templatestatus;

      this.http.post('//'+config.global_ip+'/pdf/UpdateTemplate',this.contract).subscribe((res:any)=>{
        this.contract={};  
        var result = JSON.parse(res._body);
      
        if(result.status==200) {
          this.message='Template Created';
          $('#message').modal('toggle');
          setTimeout(function(){ 
            $('#message').modal('toggle');
            self.router.navigate(['/admin/manageTemplate']);
          }, 1000);
        }else{
          var heroFormmmmmmmmmm :NgForm;
          heroFormmmmmmmmmm.resetForm();
          this.message = 'Table Not Found';
          $('#message').modal('toggle');
          setTimeout(function(){ 
            $('#message').modal('toggle');
          }, 1000);
        }
        },(err)=>{
          var heroFormmmmmmmmmm :NgForm;
          heroFormmmmmmmmmm.resetForm();
          this.message = 'Table Not Found';
        $('#message').modal('toggle');
        setTimeout(function(){ 
          $('#message').modal('toggle');
        }, 1000);
        });
    }
  
  
  }
