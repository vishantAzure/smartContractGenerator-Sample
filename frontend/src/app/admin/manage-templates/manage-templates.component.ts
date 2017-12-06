import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Templates } from '../../modal';
import * as config from '../../../../../config/config';

declare var $;
@Component({
  selector: 'app-manage-templates',
  templateUrl: './manage-templates.component.html'
})
export class ManageTemplatesComponent implements OnInit {
  User_data;
  TemplateData;
  ViewTemplate;
  modalData;
  confirmDeleteID;
  dashboard;
  message;
  constructor(public router: Router,public http: Http) { 
    this.TemplateData = new Templates();
  }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
    if(this.User_data) {
      
      this.http.get('//'+config.global_ip+'/pdf/getTemplates').subscribe((res:any)=>{
        this.ViewTemplate = JSON.parse(res._body).res;
      },(err)=>{
        this.message='Data Not Found';
        $('#message').modal('toggle');
      });
  }else{
      console.log('ll');
  }
  }

  changeModal(e) {
    this.modalData =e;
  }

  ConfirmDelete(id) {
    $('#cnfrmDelete').modal('toggle');
    this.confirmDeleteID = id;
  }

  DeleteTemplate() {
    $('#cnfrmDelete').modal('toggle');
    let obj = {id:this.confirmDeleteID}

    this.http.post('//'+config.global_ip+'/pdf/DeleteTemplate',obj).subscribe((res:any)=>{
      var result = JSON.parse(res._body);
      
      if(result.status==200) {
        this.ngOnInit();
      }
      },(err)=>{
        this.message='Table Not Found';
        $('#message').modal('toggle');
      });
  }

  changePage(data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "idTemplates": data.idTemplate,          
      }
  };
  this.router.navigate(["/admin/editTemplate"], navigationExtras);
  }
}
