import { Component } from '@angular/core';
import { OlibChartPieConfig } from '../olib-chart-pie-config.model';

@Component({
  selector: 'olib-chart-pie-sample',
  templateUrl: './chart-pie-sample.component.html',
  styleUrls: ['./chart-pie-sample.component.scss']
})
export class ChartPieSampleComponent {

  pieChartConfig : OlibChartPieConfig;

  options: any = {};
  themeSubscription: any;

  constructor() {
    this.pieChartConfig = new OlibChartPieConfig;
    this.pieChartConfig.$title = "sample";
    this.pieChartConfig.$data = [
      { value: 111, name: 'Aaa' },
      { value: 222, name: 'Bbb' },
      { value: 333, name: 'Ccc' },
      { value: 444, name: 'Ddd' },
      { value: 555, name: 'Eee' },
    ];
  }
}
