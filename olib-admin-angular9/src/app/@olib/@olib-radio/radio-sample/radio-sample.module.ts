import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';

import { RadioSampleRoutingModule } from './radio-sample-routing.module';
import { RadioSampleComponent }     from './radio-sample.component';
import { OlibRadioModule }          from '../olib-radio.module';

@NgModule({
  declarations: [RadioSampleComponent],
  imports: [
    CommonModule,
    RadioSampleRoutingModule,
    OlibRadioModule
  ],
  exports:[
    RadioSampleComponent
  ]
})
export class RadioSampleModule { }
