import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { NgxEchartsModule }         from 'ngx-echarts';
import { OlibChartLineComponent }   from './olib-chart-line.component';

@NgModule({
  declarations: [OlibChartLineComponent],
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  exports: [
    OlibChartLineComponent
  ]
})
export class OlibChartLineModule { }
