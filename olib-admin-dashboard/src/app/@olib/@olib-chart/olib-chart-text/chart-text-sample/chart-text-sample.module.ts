import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartTextSampleComponent } from './chart-text-sample.component';
import { OlibChartTextModule } from '../olib-chart-text.module';



@NgModule({
  declarations: [ChartTextSampleComponent],
  imports: [
    CommonModule,
    OlibChartTextModule
  ],
  exports:[
    ChartTextSampleComponent
  ]
})
export class ChartTextSampleModule { }
