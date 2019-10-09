import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { ChartPieSampleComponent }  from './chart-pie-sample.component';
import { OlibChartPieModule }       from '../olib-chart-pie.module';

@NgModule({
  declarations: [ChartPieSampleComponent],
  imports: [
    CommonModule,
    OlibChartPieModule
  ],
  exports:[
    ChartPieSampleComponent
  ]
})
export class ChartPieSampleModule { }
