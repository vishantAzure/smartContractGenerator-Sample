import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Modal } from '../modal';
import * as config from '../../../../config/config';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html'
})
export class PrivacyPolicyComponent implements OnInit {
      model;
      file;
      User_data;
      dashboard;
          constructor(public http: Http,public router: Router) { 
            this.model = new Modal();
          }
        
          ngOnInit() {
          }
      }