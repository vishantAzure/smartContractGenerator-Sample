import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Modal } from '../modal';
import * as config from '../../../../config/config';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent implements OnInit {
    User = ['Select User','Customer','Service_Provider','Company'];
        constructor(public http: Http,public router: Router) { 
        }
      
        ngOnInit() {
        }
    }
