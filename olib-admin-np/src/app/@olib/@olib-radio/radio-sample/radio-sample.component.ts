import { Component, OnInit } from '@angular/core';
import { OlibRadioConfig } from '../olib-radio-config.model';

@Component({
  selector: 'olib-radio-sample',
  templateUrl: './radio-sample.component.html',
  styleUrls: ['./radio-sample.component.scss']
})
export class RadioSampleComponent implements OnInit {

  sampleConfig : OlibRadioConfig;

  constructor() { }

  ngOnInit() {
    this.sampleConfig = new OlibRadioConfig("sample","all");
    this.sampleConfig.addOption('test all','all');
    this.sampleConfig.addOption('test 1','1');
    this.sampleConfig.addOption('test 2','2');
    this.sampleConfig.addOption('test 3','3');
  }

}
