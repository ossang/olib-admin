import { NgModule }               from '@angular/core';
import { ChartPieSampleModule }   from './olib-chart-pie/chart-pie-sample/chart-pie-sample.module';
import { ChartBarSampleModule }   from './olib-chart-bar/chart-bar-sample/chart-bar-sample.module';
import { ChartLineSampleModule }  from './olib-chart-line/chart-line-sample/chart-line-sample.module';

@NgModule({
  exports:[
    ChartPieSampleModule,
    ChartBarSampleModule,
    ChartLineSampleModule
  ]
})
export class OlibChartSampleModule { }
