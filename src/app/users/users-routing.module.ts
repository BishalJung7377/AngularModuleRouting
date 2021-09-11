import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
{
  path:"user",children:[
    {
      path:"login",
      component: LoginComponent
    },
    {
      path:"list",
      component: SignupComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
export const routingcomponents={
  LoginComponent, SignupComponent
}
