import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss']
})
export class LinkCardComponent implements OnInit {

  @Input() public url:string = '';
  @Input() public name:string = '';
  @Output() public delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
