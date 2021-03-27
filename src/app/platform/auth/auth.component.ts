import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'auth-template',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public _auth:AuthService,  public activatedroute: ActivatedRoute, public _R:Router) { }

  ngOnInit(): void {
   
  }
  ngAfterViewInit(){

  }



}
