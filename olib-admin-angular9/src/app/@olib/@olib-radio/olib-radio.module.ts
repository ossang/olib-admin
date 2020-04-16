import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { NbRadioModule }            from '@nebular/theme';

import { OlibRadioComponent }       from './olib-radio.component';

@NgModule({
  declarations: [OlibRadioComponent],
  imports: [
    CommonModule,
    NbRadioModule
  ],
  exports:[
    OlibRadioComponent
  ]
})
export class OlibRadioModule { }
