import { NgModule }               from '@angular/core';
import { ChartPieSampleModule }   from './olib-chart-pie/chart-pie-sample/chart-pie-sample.module';
import { ChartBarSampleModule }   from './olib-chart-bar/chart-bar-sample/chart-bar-sample.module';
import { ChartLineSampleModule }  from './olib-chart-line/chart-line-sample/chart-line-sample.module';
import { ChartTextSampleModule }  from './olib-chart-text/chart-text-sample/chart-text-sample.module';
import { ChartPieSample2Module }  from './olib-chart-pie/chart-pie-sample2/chart-pie-sample2.module';
import { ChartBarSample2Module }  from './olib-chart-bar/chart-bar-sample2/chart-bar-sample2.module';

@NgModule({
  exports:[
    ChartPieSampleModule,
    ChartPieSample2Module,
    ChartBarSampleModule,
    ChartBarSample2Module,
    ChartLineSampleModule,
    ChartTextSampleModule
  ]
})
export class OlibChartSampleModule { }
