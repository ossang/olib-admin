import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';

import { ScrollerSampleRoutingModule }  from './scroller-sample-routing.module';
import { ScrollerSampleComponent }      from './scroller-sample.component';
import { OlibScrollerModule }           from '../olib-scroller.module';

@NgModule({
  declarations: [ScrollerSampleComponent],
  imports: [
    CommonModule,
    ScrollerSampleRoutingModule,
    OlibScrollerModule
  ],
  exports:[
    ScrollerSampleComponent
  ]
})
export class ScrollerSampleModule { }
