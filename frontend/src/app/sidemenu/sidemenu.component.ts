import { Component, OnInit } from '@angular/core';
import { SidenavigationService } from '../sidenavigation.service';

declare var $;
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
})
export class SidemenuComponent implements OnInit {
  User_data;
  dashboard;
  openSideMenu;
  constructor(public sidenav :SidenavigationService) { }

  ngOnInit() {
    this.openSideMenu = this.sidenav.GetRouting();
    for(var i=0;i<this.openSideMenu.length;i++) {
      $('#'+this.openSideMenu[i]+ ' ul').show();
    }
    this.User_data = JSON.parse(localStorage.getItem('User'));
    if(this.User_data) {
      switch(this.User_data.User_Type){
      case "Customer":
          this.dashboard='customer';
          break;
      case "Service Provider":
          this.dashboard='serviceprovider';
          break;
      case "Company":
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

  Toggle(id) {
    $('#'+id+ ' ul').toggle();
    this.sidenav.sidenav(id);
  }

}