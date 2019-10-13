import { Component } from '@angular/core';
import { OlibChartPieConfig } from '../olib-chart-pie-config.model';

@Component({
  selector: 'olib-chart-pie-sample2',
  templateUrl: './chart-pie-sample2.component.html',
  styleUrls: ['./chart-pie-sample2.component.scss']
})
export class ChartPieSample2Component {

  dynamicPieChartConfig : OlibChartPieConfig;

  constructor() {
    this.dynamicPieChartConfig = new OlibChartPieConfig;
    this.dynamicPieChartConfig.$title = "dynamic";
    this.dynamicPieChartConfig.$isDynamicData = true;
    this.dynamicPieChartConfig.$updateTime = 5000;
    this.ramdomData();

    setInterval(()=>{
      this.ramdomData();
    },this.dynamicPieChartConfig.$updateTime);
  }

  ramdomData(){
    let datas = [];
    let cnt = Math.round((Math.random() % 10) * 10);
    for(let i =0; i<cnt; i++){
      datas[i] = {name:"label - "+i,value:Math.random()*1000}
    }
    this.dynamicPieChartConfig.$data = datas;
  }
  
}
