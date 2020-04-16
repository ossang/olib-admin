import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';

import { OrderSampleRoutingModule } from './order-sample-routing.module';
import { OrderSampleComponent }     from './order-sample.component';
import { OlibOrderModule }          from '../olib-order.module';

@NgModule({
  declarations: [OrderSampleComponent],
  imports: [
    CommonModule,
    OrderSampleRoutingModule,
    OlibOrderModule
  ],
  exports:[
    OrderSampleComponent
  ]
})
export class OrderSampleModule { }
