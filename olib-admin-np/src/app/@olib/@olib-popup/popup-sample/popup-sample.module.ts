import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';

import { PopupSampleRoutingModule } from './popup-sample-routing.module';
import { PopupSampleComponent }     from './popup-sample.component';
import { OlibPopupModule }          from '../olib-popup.module';

@NgModule({
  declarations: [PopupSampleComponent],
  imports: [
    CommonModule,
    PopupSampleRoutingModule,
    OlibPopupModule
  ],
  exports:[
    PopupSampleComponent
  ]
})
export class PopupSampleModule { }
