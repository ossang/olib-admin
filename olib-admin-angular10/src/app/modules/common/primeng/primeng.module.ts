import { NgModule } from '@angular/core';

import {BreadcrumbModule} from 'primeng/breadcrumb';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {RippleModule} from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {TabViewModule} from 'primeng/tabview';
import {CheckboxModule} from 'primeng/checkbox';
import {PickListModule} from 'primeng/picklist';

@NgModule({
  exports:[
    BreadcrumbModule,
    CardModule,
    ButtonModule,
    RadioButtonModule,
    TableModule,
    DropdownModule,
    RippleModule,
    InputTextModule,
    CalendarModule,
    TabViewModule,
    CheckboxModule,
    PickListModule
  ]
})
export class PrimengModule { }
