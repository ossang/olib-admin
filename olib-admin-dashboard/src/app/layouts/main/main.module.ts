import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';

import { MainRoutingModule }      from './main-routing.module';
import { MainComponent }          from './main.component';
import { LayoutModule }           from '../layout/layout.module';
import { NebularModule }          from 'src/app/modules/nebular/nebular.module';
import { Example1Module }         from 'src/app/modules/example1/example1.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    NebularModule,
    Example1Module
  ]
})
export class MainModule { }
