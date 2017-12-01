import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Modal } from '../modal';
import * as config from '../../../../config/config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  model;
  file;
  User_data;
  dashboard;
  User = ['Select User','Customer','Service_Provider','Company'];
      constructor(public http: Http,public router: Router ) { 
        this.model = new Modal();
      }
    
      ngOnInit() {}

  }