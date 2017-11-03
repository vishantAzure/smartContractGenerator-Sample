import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Modal } from '../modal';
import { ToasterService} from 'angular2-toaster';
import * as config from '../../../../config/config';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html'
})
export class FAQComponent implements OnInit {
    private toasterService: ToasterService;
        constructor(public http: Http,public router: Router ,toasterService: ToasterService,fb: FormBuilder) { 
          this.toasterService = toasterService;
        }
        
        ngOnInit() {}
          
    }