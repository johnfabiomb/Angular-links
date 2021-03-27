import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AppService } from 'src/app/services/base/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showPassword:boolean = false;

  public form: FormGroup;

  constructor(public _auth:AuthService, public _app:AppService) {
    this.form = this._app.formBuilder.group({
      name: ['', [Validators.required]],
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
      this._auth.register(this.form.value).subscribe(
        (res:any)=>{
          ///then we get login to get the token because register doesn't return it
          this._auth.login(this.form.value).subscribe(
            (res:any)=>{
              this._auth.token = res.token;
              this._app.loading = false;
              this._app.router.navigate(['']);
            }
          );
        }
      )
    }
  }

}
