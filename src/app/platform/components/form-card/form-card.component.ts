import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/base/app.service';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {

  public form: FormGroup;
  public submitted: boolean = false;

  @Output() public addEvent = new EventEmitter();

  constructor(public _app: AppService) {
    this.form = this._app.formBuilder.group({
      url: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  add() {
    this.submitted=true;
    if (this.form.valid) {
      this.addEvent.emit(this.form.value);
    }
  }

}
