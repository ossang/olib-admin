import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { CommonModule }             from '@angular/common';
import { OlibDatepickerComponent }  from './olib-datepicker.component';
import { CalendarModule }           from 'primeng/calendar';

@NgModule({
  declarations: [OlibDatepickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule
  ],
  exports:[
    OlibDatepickerComponent
  ]
})
export class OlibDatepickerModule { }
