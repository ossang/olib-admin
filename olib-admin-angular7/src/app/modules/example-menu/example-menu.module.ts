import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleMenuRoutingModule } from './example-menu-routing.module';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';

@NgModule({
  declarations: [Menu1Component, Menu2Component, Menu3Component],
  imports: [
    CommonModule,
    ExampleMenuRoutingModule
  ]
})
export class ExampleMenuModule { }
