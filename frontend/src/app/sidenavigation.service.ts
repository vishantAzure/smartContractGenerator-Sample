import { Injectable } from '@angular/core';

@Injectable()
export class SidenavigationService {
activeParent;
  constructor() {    
    this.activeParent = '';
  }

  sidenav(id) {
    this.activeParent = id;
  }

  getActiveParentMenuId() {
    return this.activeParent;
  }

}
