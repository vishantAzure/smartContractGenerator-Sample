import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Contract } from '../../../modal';
import {Location} from '@angular/common';
import * as config from '../../../../../../config/config';
import { DomSanitizer } from '@angular/platform-browser';
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
})
export class TemplateComponent implements OnInit {
  User_data;
  dashboard;
  Template;
  contract;
  constructor(public router: Router,public http: Http,private _location: Location) { 
    this.contract = new Contract();
  }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
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
      this.http.get('//'+config.global_ip+'/pdf/getTemplates').subscribe((res:any)=>{
        this.Template = JSON.parse(res._body).res;
       },(err)=>{
        console.log(err);
       });
    }else{
        console.log('ll');
    }
  }

  onChange(id) {
    let navigationExtras: NavigationExtras = {
        queryParams: {
            "TemplateID":id
        }
    };
    this.router.navigate(['/'+this.dashboard+"/generateContract"], navigationExtras);
  }

  backClicked() {
    this._location.back();
  }

}
