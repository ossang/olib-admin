import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { OlibCheckboxComponent }  from './olib-checkbox.component';
import { NbCheckboxModule }       from '@nebular/theme';

@NgModule({
  declarations: [OlibCheckboxComponent],
  imports: [
    CommonModule,
    NbCheckboxModule
  ],
  exports:[
    OlibCheckboxComponent
  ]
})
export class OlibCheckboxModule { }
