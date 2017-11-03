import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Contract } from '../../../modal';
import { ToasterService} from 'angular2-toaster';
import * as config from '../../../../../../config/config';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
})
export class PreviewComponent implements OnInit {
  private toasterService: ToasterService;
  User_data;
  dashboard;
  constructor(public router: Router,public http: Http,toasterService: ToasterService) { }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
  }

}
