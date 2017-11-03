import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
web3;
User_data;
dashboard;
  constructor(public router: Router) { }

  ngOnInit() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
  }

}
