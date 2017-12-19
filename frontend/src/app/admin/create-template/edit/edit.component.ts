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
    CategoryTree;
    selected;
    TemplateDetails;
    constructor(public router: Router,public http: Http,public route: ActivatedRoute) { 
      this.contract = {};
      this.route.queryParams.subscribe(params => {
        this.contract.id = params["idTemplates"];
       
    });
    }
  
    ngOnInit() {
      
    let self = this;

    function hasChildren(element, arr) {
        var ret = false;
        Object.keys(arr).forEach(function(key) {
            if(arr[key].parent_category == element.id) {
                ret =  true;
            }
        });
        
        return ret;
    }

    function getChild(final_categories, arr, element, count) {
        var children = [];
        
        Object.keys(arr).forEach(function(key) {
            if(arr[key].parent_category == element.id) {
                for(var i=0; i < count; i++) {
                    arr[key].name = " - "+arr[key].name;
                }
                final_categories.push(arr[key]);
                
                if(hasChildren(arr[key], arr)) {
                    count ++;                    
                    var children = getChild(final_categories, arr, arr[key], count);
                    final_categories = children;
                }else{
                    count--;
                }
            }
        });
        
        return final_categories;
    };

      this.User_data = JSON.parse(localStorage.getItem('User'));
      if(this.User_data) {

        this.http.post('//'+config.global_ip+'/ApI/retrieveCategory',{id:this.User_data.idUsers}).subscribe((res:any)=>{
          let abc = JSON.parse(res._body).res;
          self.Category = [];
          for(var i=0;i<abc.length;i++) {
            if(abc[i].Status==1) {
              self.Category.push(abc[i]);
            }
          }

        var final_categories = [];
        self.Category.forEach(function(element) {            
            if(element.parent_category == 0) {
                final_categories.push(element);
                var children_arr = getChild(final_categories, self.Category, element, 1);  
                if(children_arr.length > 0) {
                    final_categories = children_arr;
                }
            }
        });
        
        this.CategoryTree = final_categories;

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
