import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRoutingandModuleAdvan';

  constructor (private viewContainer:ViewContainerRef,
    private cfr:ComponentFactoryResolver){

  }
 async loadadmin(){
   this.viewContainer.clear();
   const{ListComponent} = await import ("./admin/list/list.component");
   this.viewContainer.createComponent(
     this.cfr.resolveComponentFactory(ListComponent)
   )
  }

  async loaduser(){
this.viewContainer.clear();
const{SignupComponent} = await import("./users/signup/signup.component");
this.viewContainer.createComponent(
  this.cfr.resolveComponentFactory(SignupComponent)
)
  }
}
