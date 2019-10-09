import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { NgxEchartsModule }       from 'ngx-echarts';
import { OlibChartLiveComponent } from './olib-chart-live.component';

@NgModule({
  declarations: [OlibChartLiveComponent],
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  exports: [
    OlibChartLiveComponent
  ]
})
export class OlibChartLiveModule { }
