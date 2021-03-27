import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './template/container/container.component';

const routes: Routes = [
  {
    path:'',
    component: ContainerComponent,
    loadChildren: ()=> import('./platform/platform.module').then((m) => m.PlatformModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
