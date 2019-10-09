import { Component } from '@angular/core';
import { OlibChartBarConfig } from '../olib-chart-bar-config.model';

@Component({
  selector: 'olib-chart-bar-sample',
  templateUrl: './chart-bar-sample.component.html',
  styleUrls: ['./chart-bar-sample.component.scss']
})
export class ChartBarSampleComponent {

  barChartConfig : OlibChartBarConfig;
  
  constructor() { 
    this.barChartConfig = new OlibChartBarConfig;
    this.barChartConfig.$isVertical = false;
    this.barChartConfig.$categorys = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    this.barChartConfig.$values = [111, 222, 333, 444, 555, 666, 777];
  }
}
