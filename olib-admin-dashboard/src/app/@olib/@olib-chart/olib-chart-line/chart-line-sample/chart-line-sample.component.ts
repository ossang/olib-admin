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

  constructor() { 
    this.lineChartConfig = new OlibChartLineConfig;
    this.lineChartConfig.$categorys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let datas = [];
    datas.push(new OlibChartLineData('line 1',[1, 3, 9, 27, 81, 247, 741, 2223, 6669]));
    datas.push(new OlibChartLineData('line 2',[1, 2, 4, 8, 16, 32, 64, 128, 256]));
    datas.push(new OlibChartLineData('line 3',[1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512]));
    this.lineChartConfig.$datas = datas;
  }
}
