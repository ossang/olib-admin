import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';

import { CheckboxSampleRoutingModule }  from './checkbox-sample-routing.module';
import { CheckboxSampleComponent }      from './checkbox-sample.component';
import { OlibCheckboxModule }           from '../olib-checkbox.module';

@NgModule({
  declarations: [CheckboxSampleComponent],
  imports: [
    CommonModule,
    CheckboxSampleRoutingModule,
    OlibCheckboxModule
  ],exports:[
    CheckboxSampleComponent
  ]
})
export class CheckboxSampleModule { }
