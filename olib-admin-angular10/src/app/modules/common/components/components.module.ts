import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table/table.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations : [TableComponent],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[TableComponent]
})
export class ComponentsModule { }
