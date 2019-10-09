import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { NgxEchartsModule }         from 'ngx-echarts';
import { OlibChartBarComponent }    from './olib-chart-bar.component';

@NgModule({
  declarations: [OlibChartBarComponent],
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  exports: [
    OlibChartBarComponent
  ]
})
export class OlibChartBarModule { }
