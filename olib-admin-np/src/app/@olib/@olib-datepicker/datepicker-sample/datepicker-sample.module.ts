import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule }                      from '@angular/forms';

import { DatepickerSampleRoutingModule }    from './datepicker-sample-routing.module';
import { DatepickerSampleComponent }        from './datepicker-sample.component';
import { OlibDatepickerModule }             from '../olib-datepicker.module';

@NgModule({
  declarations: [DatepickerSampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    DatepickerSampleRoutingModule,
    OlibDatepickerModule
  ]
})
export class DatepickerSampleModule { }
