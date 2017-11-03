import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Modal } from '../modal';
import { ToasterService} from 'angular2-toaster';
import * as config from '../../../../config/config';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html'
})
export class PrivacyPolicyComponent implements OnInit {
      private toasterService: ToasterService;
      model;
      file;
      User_data;
      dashboard;
      User = ['Select User','Customer','Service_Provider','Company'];
          constructor(public http: Http,public router: Router ,toasterService: ToasterService) { 
            this.toasterService = toasterService;
            this.model = new Modal();
          }
        
          ngOnInit() {
          }
      }