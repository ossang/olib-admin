import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartBarSample2Component } from './chart-bar-sample2.component';
import { OlibChartBarModule } from '../olib-chart-bar.module';



@NgModule({
  declarations: [ChartBarSample2Component],
  imports: [
    CommonModule,
    OlibChartBarModule
  ],
  exports: [
    ChartBarSample2Component
  ]
})
export class ChartBarSample2Module { }
