import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';

import { LayoutRoutingModule }      from './layout-routing.module';
import { LayoutComponent }          from './layout.component';
import { HeaderComponent }          from './header/header.component';
import { NebularModule }            from 'src/app/modules/nebular/nebular.module';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NebularModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
