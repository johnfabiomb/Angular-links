import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AppService } from 'src/app/services/base/app.service';
import { LinksService } from 'src/app/services/links.service';
import { FormCardComponent } from '../components/form-card/form-card.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public links:Array<any>;

  @ViewChild('linkForm') linkForm: FormCardComponent;

  constructor(public _app:AppService, public _auth:AuthService, public _links:LinksService, public confirmationService:ConfirmationService) {

   }

  ngOnInit(): void {
   this.getLinks();
  }

  saveLinks(event:any){
    this._links.createLink(event).subscribe(res=>{
      this.linkForm.submitted = false;
      this.linkForm.form.reset();
      this.getLinks();
    });
  }

  getLinks(){
    this._links.getLinks().subscribe(
      (res:any)=>{
        this.links = res;
      }
    )
  }

  deleteLink(link){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this link?',
      accept: () => {
        this._links.deleteLink(link.id).subscribe(
          res=>{
            this.links.splice(this.links.indexOf(link),1);
          },
        )
      }
    });
    
  }

}
