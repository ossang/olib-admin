import { Component } from '@angular/core';
import { OlibChartBarConfig } from '../olib-chart-bar-config.model';

@Component({
  selector: 'olib-chart-bar-sample2',
  templateUrl: './chart-bar-sample2.component.html',
  styleUrls: ['./chart-bar-sample2.component.scss']
})
export class ChartBarSample2Component {

  dynamicBarChartConfig : OlibChartBarConfig;

  constructor() { 
    this.dynamicBarChartConfig = new OlibChartBarConfig;
    this.dynamicBarChartConfig.$isVertical = false;
    this.dynamicBarChartConfig.$isDynamicData = true;
    this.dynamicBarChartConfig.$updateTime = 5000;

    this.ramdomData();

    setInterval(()=>{
      this.ramdomData();
    },this.dynamicBarChartConfig.$updateTime);
  }

  ramdomData(){
    let categorys = [];
    let values = [];
    for(let i =0; i<10; i++){
      categorys[i]="category "+i;
      values[i]=Math.random()*1000;
    }
    this.dynamicBarChartConfig.$categorys = categorys;
    this.dynamicBarChartConfig.$values = values;
  }

}
