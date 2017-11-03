import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';
import { ToasterService} from 'angular2-toaster';

declare var $;
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html'
})
export class CompanyComponent implements OnInit {
    private toasterService: ToasterService
  dashboard;
  User_data;
  constructor(public router: Router,toasterService: ToasterService) { 
    this.toasterService = toasterService
  }
  
    ngOnInit() {
      this.User_data = JSON.parse(localStorage.getItem('User'));
    }

    popup() {
        $('#bootalert').css('display','block');
        setTimeout(function(){
            $('#bootalert').css('display','none');
        }, 5000);
    }
  
}
