import { NgModule }               from '@angular/core';
import { CheckboxSampleModule }   from './@olib-checkbox/checkbox-sample/checkbox-sample.module';
import { DatepickerSampleModule } from './@olib-datepicker/datepicker-sample/datepicker-sample.module';
import { DropdownSampleModule }   from './@olib-dropdown/dropdown-sample/dropdown-sample.module';
import { RadioSampleModule }      from './@olib-radio/radio-sample/radio-sample.module';
import { TableSampleModule }      from './@olib-table/table-sample/table-sample.module';
import { FileuploadSampleModule } from './@olib-fileupload/fileupload-sample/fileupload-sample.module';
import { EditorSampleModule }     from './@olib-editor/editor-sample/editor-sample.module';
import { PopupSampleModule }      from './@olib-popup/popup-sample/popup-sample.module';
import { OrderSampleModule }      from './@olib-order/order-sample/order-sample.module';
import { ScrollerSampleModule }   from './@olib-scroller/scroller-sample/scroller-sample.module';

@NgModule({
  exports:[
    CheckboxSampleModule,
    DatepickerSampleModule,
    DropdownSampleModule,
    RadioSampleModule,
    TableSampleModule,
    FileuploadSampleModule,
    EditorSampleModule,
    PopupSampleModule,
    OrderSampleModule,
    ScrollerSampleModule
  ]
})
export class OlibNpSampleModule { }
