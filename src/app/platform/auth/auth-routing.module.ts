import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    // component: AuthComponent,
    children:[
      {
        path: 'login',
        component: LoginComponent,
        data: {
          button:{
            label: "Signup",
            href: "register",
          }
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: { 
          button:{
              label: "Login",
              href: "login",
          }
        }
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
