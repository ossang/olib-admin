import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';
import { Ng2SmartTableModule }        from 'ng2-smart-table';
import { OlibTalbeSmartComponent }    from './olib-talbe-smart.component';


@NgModule({
  declarations: [OlibTalbeSmartComponent],
  imports: [
    CommonModule,
    Ng2SmartTableModule
  ],
  exports: [
    OlibTalbeSmartComponent
  ]
})
export class OlibTalbeSmartModule { }
