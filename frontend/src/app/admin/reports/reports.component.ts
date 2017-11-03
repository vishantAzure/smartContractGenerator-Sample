import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html'
})
export class ReportsComponent implements OnInit {
  User_data;
  dashboard;
  constructor(public router: Router) { }
  
    ngOnInit() {
      this.User_data = JSON.parse(localStorage.getItem('User'));
    }
}
