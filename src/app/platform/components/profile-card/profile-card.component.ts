import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AppService } from 'src/app/services/base/app.service';

class user {
  id?:string;
  avatar:string;
  createdAt:string;
  email:string;
  name:string;
}

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  public user:user;

  constructor(public _app:AppService, public _auth:AuthService) {
    this._app.loading = true;
    this._auth.getUser(localStorage.getItem('id') ? localStorage.getItem('id') : 1 ).subscribe(
      res=>{
        this.user = res;
        this._app.loading = false;
      }
    )
   }

   ngOnInit(): void {
   
  }
}
