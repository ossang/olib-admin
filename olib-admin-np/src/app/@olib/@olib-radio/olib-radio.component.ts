import { Component, OnInit, Input } from '@angular/core';
import { OlibRadioConfig }          from './olib-radio-config.model';

@Component({
  selector: 'olib-radio',
  templateUrl: './olib-radio.component.html',
  styleUrls: ['./olib-radio.component.scss']
})
export class OlibRadioComponent implements OnInit {

  @Input("config")
  config : OlibRadioConfig;

  constructor() { }

  ngOnInit() {
  }

}
