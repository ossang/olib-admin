import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { ChartBarSampleComponent }      from './chart-bar-sample.component';
import { OlibChartBarModule }           from '../olib-chart-bar.module';

@NgModule({
  declarations: [ChartBarSampleComponent],
  imports: [
    CommonModule,
    OlibChartBarModule
  ],
  exports: [
    ChartBarSampleComponent
  ]
})
export class ChartBarSampleModule { }
