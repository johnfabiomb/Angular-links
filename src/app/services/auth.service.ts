import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  public url = {
    login:'login',
    register:'register',
    getUser:'user/:id',
  };

  constructor(_http:HttpClient) {
    super(_http)
  }

  login(params){
    return this.post(this.url.login, params);
  }

  register(params){
    return this.post(this.url.register, params);
  }

  getUser(id:any = 1){
    return this.get(this.url.getUser.replace(':id',id));
  }
}
