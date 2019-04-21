import { NgModule }               from '@angular/core';
import { OlibDatepickerModule }   from './@olib-datepicker/olib-datepicker.module';
import { OlibDropdownModule }     from './@olib-dropdown/olib-dropdown.module';
import { OlibRadioModule }        from './@olib-radio/olib-radio.module';
import { OlibTableModule }        from './@olib-table';

@NgModule({
  exports:[
    OlibDatepickerModule,
    OlibDropdownModule,
    OlibRadioModule,
    OlibTableModule
  ]
})
export class OlibNpModule { }
