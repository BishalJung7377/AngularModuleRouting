import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


const routes: Routes = [
  {
    path:'admin', children:[
      {
        path: "list",
        component: ListComponent
      },{
        path: "login",
        component:AdminloginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const adminrouting={
  ListComponent,AdminloginComponent
}