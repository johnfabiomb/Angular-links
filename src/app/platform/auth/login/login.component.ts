import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AppService } from 'src/app/services/base/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(public _auth:AuthService, public _app:AppService, private route: ActivatedRoute) {
    this.form = this._app.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    });
  }

  ngOnInit(): void {
    this._app.clearCredentials();
  }

  login(){
    if(this.form.valid){
      this._app.loading = true;
      this._auth.login(this.form.value).subscribe(
        (res:any)=>{
          this._auth.token = res.token;
          this._app.loading = false;
          this._app.router.navigate(['']);
        }
      )
    }
  }

}
