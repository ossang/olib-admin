import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';
import { TableSmartSampleComponent }  from './table-smart-sample.component';
import { OlibTalbeSmartModule }       from '../olib-talbe-smart.module';



@NgModule({
  declarations: [TableSmartSampleComponent],
  imports: [
    CommonModule,
    OlibTalbeSmartModule
  ],
  exports: [
    TableSmartSampleComponent
  ]
})
export class TableSmartSampleModule { }
