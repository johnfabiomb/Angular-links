import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { LinkCardComponent } from './link-card/link-card.component';
import { FormCardComponent } from './form-card/form-card.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProfileCardComponent, LinkCardComponent, FormCardComponent],
  exports: [ProfileCardComponent, LinkCardComponent, FormCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
