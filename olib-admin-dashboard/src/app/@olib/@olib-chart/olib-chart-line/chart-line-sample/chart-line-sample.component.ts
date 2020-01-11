import { Component }            from '@angular/core';
import { OlibChartLineConfig }  from '../olib-chart-line-config.model';
import { OlibChartLineData }    from '../olib-chart-line-config-data.model';

@Component({
  selector: 'olib-chart-line-sample',
  templateUrl: './chart-line-sample.component.html',
  styleUrls: ['./chart-line-sample.component.scss']
})
export class ChartLineSampleComponent {

  lineChartConfig : OlibChartLineConfig;
  private timer: any;

  constructor() { 
    this.lineChartConfig = new OlibChartLineConfig;
    // this.lineChartConfig.$categorys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // let datas = [];
    // datas.push(new OlibChartLineData('line 1',[10, 11, 12, 10, 15, 20, 30, 23, 19]));
    // datas.push(new OlibChartLineData('line 2',[1, 25, 4, 8, 66, 32, 64, 8, 6]));
    // datas.push(new OlibChartLineData('line 3',[474, 479, 500, 504, 508, 550,580,600,610]));
    // this.lineChartConfig.$datas = datas;
    
    let category = [];
    let data1 = [];
    let data2 = [];
    let now = new Date();
    for(let i = 0; i<20; i++){
      category[i] =  [now.getMinutes(),now.getSeconds()].join(':');
    }
    for(let i = 0; i<20; i++){
      data1[i] = Math.round(Math.random()*100%10);
      data2[i] = Math.round(Math.random()*100%10);
    }
    let datas = [];
    datas.push(new OlibChartLineData('data1',data1));
    datas.push(new OlibChartLineData('data2',data2));
    this.lineChartConfig.$categorys = category;
    this.lineChartConfig.$datas = datas;
    this.lineChartConfig.$isDynamicData = true;
    this.lineChartConfig.$updateTime=5000;

    setInterval(()=>{
      this.randomData();
    },this.lineChartConfig.$updateTime);
  }

  randomData(){
    let now = new Date();
    let last = this.lineChartConfig.$categorys.shift();
    this.lineChartConfig.$categorys.push([now.getMinutes(),now.getSeconds()].join(':'));

    this.lineChartConfig.$datas[0].$data.shift();
    this.lineChartConfig.$datas[0].$data.push(Math.round(Math.random()*100%10));

    this.lineChartConfig.$datas[1].$data.shift();
    this.lineChartConfig.$datas[1].$data.push(Math.round(Math.random()*100%10));
  }
}
