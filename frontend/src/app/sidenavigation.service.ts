import { Injectable } from '@angular/core';

@Injectable()
export class SidenavigationService {
routingComponent;
  constructor() { 
    this.routingComponent = [];
  }

  sidenav(id) {
    let self = this;
    if(self.routingComponent.length==0){
      self.routingComponent.push(id);
    }else{
      var pushvar = true;
      for(var i=0;i<self.routingComponent.length;i++) {
        if(self.routingComponent[i]==id) {
          self.routingComponent.splice(i,1);
          pushvar = false;
        }
      }
      if(pushvar) {
        self.routingComponent.push(id);
      }
    }
  }

  GetRouting() {
    return this.routingComponent;
  }

}
