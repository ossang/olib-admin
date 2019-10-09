import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';
import { ChartLineSampleComponent }   from './chart-line-sample.component';
import { OlibChartLineModule }        from '../olib-chart-line.module';

@NgModule({
  declarations: [ChartLineSampleComponent],
  imports: [
    CommonModule,
    OlibChartLineModule
  ],
  exports: [
    ChartLineSampleComponent
  ]
})
export class ChartLineSampleModule { }
