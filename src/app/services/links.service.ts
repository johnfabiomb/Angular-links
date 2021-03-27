import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class LinksService extends BaseService {

  public url = {
    getLinks:'/links',
    createLink:'/links',
    deleteLink:'/links/:id/',
  };

  constructor(_http:HttpClient) {
    super(_http)
  }


  createLink(link){
    return this.post(this.url.createLink,link);
  }

  getLinks(){
    return this.get(this.url.getLinks);
  }

  deleteLink(id:string){
    let u = this.url.deleteLink.replace(':id',id);
    
    return this.delete(u);
  }
}
