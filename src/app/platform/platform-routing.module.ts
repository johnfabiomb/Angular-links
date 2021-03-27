import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from '../guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path:'',
    canActivate:[CanActivateViaAuthGuard],
    component: HomeComponent
  },
  {path: '**', redirectTo: '/auth/login'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
