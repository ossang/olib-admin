import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { ChartLiveSampleComponent } from './chart-live-sample.component';
import { OlibChartLiveModule }      from '../olib-chart-live.module';

@NgModule({
  declarations: [ChartLiveSampleComponent],
  imports: [
    CommonModule,
    OlibChartLiveModule
  ],
  exports:[
    ChartLiveSampleComponent
  ]
})
export class ChartLiveSampleModule { }
