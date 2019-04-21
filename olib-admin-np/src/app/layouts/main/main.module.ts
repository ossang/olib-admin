import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { MainRoutingModule }    from './main-routing.module';
import { MainComponent }        from './main.component';
import { LayoutModule }         from '../layout/layout.module';
import { ThemeModule }          from 'src/app/@theme/theme.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    ThemeModule
  ]
})
export class MainModule { }
