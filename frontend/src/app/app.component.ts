import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Customer} from './modal';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Modal } from './modal';
import * as config from '../../../config/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
    User_data;
    dashboard;
        constructor(public http: Http,public router: Router) { 
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
    }else{
        console.log('ll');
    }
    }

}
