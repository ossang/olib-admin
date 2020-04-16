import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'olib-popup-sample',
  templateUrl: './popup-sample.component.html',
  styleUrls: ['./popup-sample.component.scss']
})
export class PopupSampleComponent implements OnInit {

  isShowPopup : boolean;
  header:string;
  width:number;

  constructor() { }

  ngOnInit() {
    this.header = '데모 팝업!';
    this.width = 800;
  }

  showPopup(){
    this.isShowPopup = true;
  }

  hideEvent(event){
    this.isShowPopup = false;
  }
}
