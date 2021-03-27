import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [ContainerComponent, FooterComponent],
  exports: [ContainerComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule
  ]
})
export class TemplateModule { }
