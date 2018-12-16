import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Example2RoutingModule } from './example2-routing.module';
import { Example2Component } from './example2.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';

@NgModule({
  declarations: [Example2Component, Menu1Component, Menu2Component],
  imports: [
    CommonModule,
    Example2RoutingModule
  ]
})
export class Example2Module { }
