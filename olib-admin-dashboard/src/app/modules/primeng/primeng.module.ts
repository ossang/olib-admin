import { NgModule }           from '@angular/core';
import { CheckboxModule }     from 'primeng/checkbox';
import { DropdownModule }     from 'primeng/dropdown';
import { InputTextModule }    from 'primeng/inputtext';
import { RadioButtonModule }  from 'primeng/radiobutton';
import { TableModule }        from 'primeng/table';
import { DialogModule }       from 'primeng/dialog';
import { FileUploadModule }   from 'primeng/fileupload';
import { OrderListModule }    from 'primeng/orderlist';
import { SpinnerModule }      from 'primeng/spinner';
import { CalendarModule }     from 'primeng/calendar';
import { CardModule }         from 'primeng/card';
import { PanelModule }        from 'primeng/panel';
import { InputSwitchModule }  from 'primeng/inputswitch';
import { TabViewModule }      from 'primeng/tabview';
import { AccordionModule }    from 'primeng/accordion';
import { BreadcrumbModule }   from 'primeng/breadcrumb';

@NgModule({
  exports:[
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    DialogModule,
    RadioButtonModule,
    FileUploadModule,
    OrderListModule,
    SpinnerModule,
    CalendarModule,
    CardModule,
    PanelModule,
    InputSwitchModule,
    TabViewModule,
    AccordionModule,
    BreadcrumbModule
  ]
})
export class PrimengModule { }
