import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router}  from '@angular/router';
import { Subscription }   from 'rxjs/Subscription';

@Injectable()
export class CustomerRouteGuard implements CanActivate {
User_data
  constructor(private router: Router) { }

  canActivate() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
        if(this.User_data && this.User_data.User_Type=='Customer'){
        return true;
      }else{
        this.router.navigate(['/']);
        return false;
      }
  }
}

@Injectable()
export class CompanyRouteGuard implements CanActivate {
  User_data
    constructor(private router: Router) { }
  
    canActivate() {
      this.User_data = JSON.parse(localStorage.getItem('User'));
          if(this.User_data && this.User_data.User_Type=='Company' || this.User_data.User_Type=='Service Provider'){
          return true;
        }else{
          this.router.navigate(['/']);
          return false;
        }
    }
  }

@Injectable()
export class AdminRouteGuard implements CanActivate {
User_data
  constructor(private router: Router) { }

  canActivate() {
    this.User_data = JSON.parse(localStorage.getItem('User'));
        if(this.User_data && this.User_data.User_Type=='Admin'){
        return true;
      }else{
        this.router.navigate(['/']);
        return false;
      }
  }
}
