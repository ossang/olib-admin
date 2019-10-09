import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'olib-talbe-smart',
  templateUrl: './olib-talbe-smart.component.html',
  styleUrls: ['./olib-talbe-smart.component.scss']
})
export class OlibTalbeSmartComponent implements OnInit {

  @Input("settings")
  settings : any;

  @Input("data")
  data : any;

  constructor() { }

  ngOnInit() {
  }

}
