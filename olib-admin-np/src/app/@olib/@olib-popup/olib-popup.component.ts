import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'olib-popup',
  templateUrl: './olib-popup.component.html',
  styleUrls: ['./olib-popup.component.scss']
})
export class OlibPopupComponent implements OnInit {

  @Input('isShowPopup')
  isShowPopup : boolean;

  @Input('header')
  header:string;
  
  @Input('width')
  width:number;

  @Output('hideEvent')
  hideEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  hidePopup(){
    this.hideEvent.emit(true);
  }
}
