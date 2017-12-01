import { Component, OnInit } from '@angular/core';
import { SidenavigationService } from '../../sidenavigation.service';

declare var $;
@Component({
  selector: 'app-company-sidemenu',
  templateUrl: './company.component.html',
})
export class CompanyComponentSideMenu implements OnInit {
  User_data;
  dashboard;
  openSideMenu;
  constructor(public sidenav :SidenavigationService) { }
    
    ngAfterViewChecked() {
        $( document ).ready(function() {       
            var parent_menu_li = $('.side_nav_active').parent().parent().parent();
if ( parent_menu_li.is( "li" ) ) {
    parent_menu_li.find('a:first').addClass('active_parent_menu');
}
        });
    }
    ngOnInit() {
        this.openSideMenu = this.sidenav.getActiveParentMenuId();
        if(this.openSideMenu.length > 0) {
            $('#'+this.openSideMenu + ' ul').show();
        }
        this.User_data = JSON.parse(localStorage.getItem('User'));
        if(this.User_data) {
            switch(this.User_data.User_Type){
              case "Customer":
                  this.dashboard='customer';
                  break;
              case "Service Provider":
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

    setParentId(id) {        
        this.sidenav.sidenav(id);
    }

}
