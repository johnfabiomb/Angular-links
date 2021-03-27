import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { HomeComponent } from './home/home.component';
import { MenubarModule } from 'primeng/menubar';
import { CanActivateViaAuthGuard } from '../guards/auth.guard';
import { ComponentsModule } from './components/components.module';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    MenubarModule,
    ComponentsModule,
    ConfirmDialogModule
  ],
  providers:[CanActivateViaAuthGuard, ConfirmationService]
})
export class PlatformModule { }
