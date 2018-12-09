import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example1Component } from './example1/example1.component';

@NgModule({
  declarations: [
    Example2Component,
    Example3Component,
    Example1Component
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
