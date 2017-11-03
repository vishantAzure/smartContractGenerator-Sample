import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Modal } from '../modal';
import { ToasterService} from 'angular2-toaster';
import * as config from '../../../../config/config';

@Component({
  selector: 'main-app',
  templateUrl: './main.component.html',
})
export class MainComponent {
  
  constructor() {}
}
