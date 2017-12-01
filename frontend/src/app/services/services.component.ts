import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Modal } from '../modal';
import * as config from '../../../../config/config';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {
        User_data;
        dashboard;
        User = ['Select User','Customer','Service_Provider','Company'];
            constructor(public http: Http,public router: Router) {}
            
            ngOnInit() {
            }
          
        }