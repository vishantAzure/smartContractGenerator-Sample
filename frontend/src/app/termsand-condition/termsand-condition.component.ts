import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Modal } from '../modal';
import { ToasterService} from 'angular2-toaster';
import * as config from '../../../../config/config';

@Component({
  selector: 'app-termsand-condition',
  templateUrl: './termsand-condition.component.html'
})
export class TermsandConditionComponent implements OnInit {
  private toasterService: ToasterService;
  User = ['Select User','Customer','Service_Provider','Company'];
      constructor(public http: Http,public router: Router ,toasterService: ToasterService) { 
        this.toasterService = toasterService;
      }
            
    ngOnInit() {
    }
          }