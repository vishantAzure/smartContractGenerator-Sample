import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Modal } from '../modal';
import * as config from '../../../../config/config';

@Component({
  selector: 'app-termsand-condition',
  templateUrl: './termsand-condition.component.html'
})
export class TermsandConditionComponent implements OnInit {
      constructor(public http: Http,public router: Router) { 
      }
            
    ngOnInit() {
    }
          }