import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';

import { Example1RoutingModule }    from './example1-routing.module';
import { Example1Component }        from './example1.component';

@NgModule({
  declarations: [Example1Component],
  imports: [
    CommonModule,
    Example1RoutingModule
  ]
})
export class Example1Module { }
