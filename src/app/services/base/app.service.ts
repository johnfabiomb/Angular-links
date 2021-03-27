import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AppService extends BaseService {

  public loading:boolean = false;

  public menu:MenuItem[] = [
    {
        label:'My Links',
        icon:'pi pi-fw pi-external-link',
        routerLink:'/links',
    },
    {
        label:'My Profile',
        icon:'pi pi-fw pi-user-edit',
        routerLink:'/profile',
    },
    {
      label:'Sign out',
      icon:'pi pi-fw pi-sign-out',
      routerLink:'/profile',
      command: ()=>{ this.clearCredentials(); this.router.navigate(['login']) }
  },
];

  constructor(
    _http:HttpClient,
    public formBuilder: FormBuilder,
    public router: Router,
    ) { 
    super(_http)
  }
}
