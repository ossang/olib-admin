import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';

import { LayoutsRoutingModule }   from './layouts-routing.module';
import { LayoutsComponent }       from './layouts.component';
import { MaterialModule }         from '../modules/common/material/material.module';
import { ExampleModule }          from '../modules/example/example.module';
import { HeaderComponent }        from './header/header.component';
import { SidebarComponent }       from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    LayoutsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    MaterialModule,
    ExampleModule
  ]
})
export class LayoutsModule { }
