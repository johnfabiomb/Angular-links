import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './services/base/app.service';
import { TemplateModule } from './template/template.module';
import { NgxLoadingXModule } from 'ngx-loading-x';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TemplateModule,
    HttpClientModule,
    NgxLoadingXModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
