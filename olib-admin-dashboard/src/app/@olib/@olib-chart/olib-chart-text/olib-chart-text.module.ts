import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlibChartTextComponent } from './olib-chart-text.component';
import { NebularModule } from 'src/app/modules/nebular/nebular.module';



@NgModule({
  declarations: [OlibChartTextComponent],
  imports: [
    CommonModule,
    NebularModule
  ],
  exports: [
    OlibChartTextComponent
  ]
})
export class OlibChartTextModule { }
