import { Router}  from '@angular/router';
import { Component, Input, OnChanges, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as config from '../../../../../config/config';
import {NgForm} from '@angular/forms';

declare var $;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  heroForm: FormGroup;

  constructor(public router: Router,public http: Http, private fb: FormBuilder) {
    this.heroForm = this.fb.group({
      name: '',
      state: ,
      power: '',
      sidekick: ''
    });
  }

  ngOnInit() {
    
  }

  createForm() {
    
  }

}
