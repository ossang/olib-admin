import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartPieSample2Component } from './chart-pie-sample2.component';
import { OlibChartPieModule } from '../olib-chart-pie.module';



@NgModule({
  declarations: [ChartPieSample2Component],
  imports: [
    CommonModule,
    OlibChartPieModule
  ],
  exports:[
    ChartPieSample2Component
  ]
})
export class ChartPieSample2Module { }
