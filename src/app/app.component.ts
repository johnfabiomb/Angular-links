import { Component } from '@angular/core';
import { AppService } from './services/base/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'links';

  constructor(
    public _app: AppService
  ) {
    
  }
}
