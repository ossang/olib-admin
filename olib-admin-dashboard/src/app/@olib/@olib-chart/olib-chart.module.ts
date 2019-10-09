import { NgModule }             from '@angular/core';
import { OlibChartPieModule }   from './olib-chart-pie/olib-chart-pie.module';
import { OlibChartBarModule }   from './olib-chart-bar/olib-chart-bar.module';
import { OlibChartLineModule }  from './olib-chart-line/olib-chart-line.module';

@NgModule({
  exports: [
    OlibChartPieModule,
    OlibChartBarModule,
    OlibChartLineModule
  ]
})
export class OlibChartModule { }
