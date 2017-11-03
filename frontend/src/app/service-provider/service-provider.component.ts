import { Component, OnInit } from '@angular/core';
import { Router}  from '@angular/router';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html'
})
export class ServiceProviderComponent implements OnInit {
  User_data;
  dashboard;
  constructor(public router: Router) { }
  
    ngOnInit() {
      this.User_data = JSON.parse(localStorage.getItem('User'));
  }
  
    Logout() {
      localStorage.clear();
      this.router.navigate(['/'])
    }

}
