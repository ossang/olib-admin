import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Example1RoutingModule } from './example1-routing.module';
import { Example1Component } from './example1.component';
import { OlibChartSampleModule } from 'src/app/@olib/@olib-chart/olib-chart-sample.module';
import { NebularModule } from '../nebular/nebular.module';


@NgModule({
  declarations: [Example1Component],
  imports: [
    CommonModule,
    Example1RoutingModule,
    OlibChartSampleModule,
    NebularModule
  ],
  exports:[
    Example1Component
  ]
})
export class Example1Module { }
