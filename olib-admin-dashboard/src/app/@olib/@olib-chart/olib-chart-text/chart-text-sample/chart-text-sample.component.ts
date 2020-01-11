import { Component, OnInit, Input } from '@angular/core';
import { OlibChartTextConfig } from '../olib-chart-text-config.model';

@Component({
  selector: 'olib-chart-text-sample',
  templateUrl: './chart-text-sample.component.html',
  styleUrls: ['./chart-text-sample.component.scss']
})
export class ChartTextSampleComponent implements OnInit {

  @Input("status")
  status : string = "info";

  config : OlibChartTextConfig;

  constructor() { }

  ngOnInit() {
    this.config = new OlibChartTextConfig;
    this.config.$status = this.status;
    this.config.$title = "sample title";
    this.config.$value = 99999;
  }

}
