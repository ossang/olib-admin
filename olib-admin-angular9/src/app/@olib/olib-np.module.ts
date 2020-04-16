import { NgModule }               from '@angular/core';
import { OlibDatepickerModule }   from './@olib-datepicker/olib-datepicker.module';
import { OlibDropdownModule }     from './@olib-dropdown/olib-dropdown.module';
import { OlibRadioModule }        from './@olib-radio/olib-radio.module';
import { OlibTableModule }        from './@olib-table';
import { OlibCheckboxModule }     from './@olib-checkbox/olib-checkbox.module';
import { OlibFileuploadModule }   from './@olib-fileupload/olib-fileupload.module';
import { OlibPopupModule }        from './@olib-popup/olib-popup.module';
import { OlibOrderModule }        from './@olib-order/olib-order.module';
import { OlibScrollerModule }     from './@olib-scroller/olib-scroller.module';

@NgModule({
  exports:[
    OlibDatepickerModule,
    OlibDropdownModule,
    OlibRadioModule,
    OlibTableModule,
    OlibCheckboxModule,
    OlibFileuploadModule,
    OlibPopupModule,
    OlibOrderModule,
    OlibScrollerModule
  ]
})
export class OlibNpModule { }
