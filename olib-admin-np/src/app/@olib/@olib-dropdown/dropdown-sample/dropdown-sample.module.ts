import { NgModule }                           from '@angular/core';
import { CommonModule }                       from '@angular/common';

import { DropdownSampleRoutingModule }        from './dropdown-sample-routing.module';
import { DropdownSampleComponent }            from './dropdown-sample.component';
import { OlibDropdownModule }                 from '../olib-dropdown.module';

@NgModule({
  declarations: [DropdownSampleComponent],
  imports: [
    CommonModule,
    DropdownSampleRoutingModule,
    OlibDropdownModule
  ]
})
export class DropdownSampleModule { }
