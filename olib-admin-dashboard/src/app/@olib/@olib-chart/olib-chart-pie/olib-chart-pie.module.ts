import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { NgxEchartsModule }         from 'ngx-echarts';
import { OlibChartPieComponent }    from './olib-chart-pie.component';

@NgModule({
  declarations: [OlibChartPieComponent],
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  exports:[
    OlibChartPieComponent
  ]
})
export class OlibChartPieModule { }
