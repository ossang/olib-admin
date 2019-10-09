import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { CommonModule }         from '@angular/common';
import { TableSampleComponent } from './table-sample.component';
import { OlibTableModule }      from '../olib-table.module';
import { TableSampleRoutingModule } from './table-sample-routing.module';

@NgModule({
  declarations: [TableSampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    OlibTableModule,
    TableSampleRoutingModule
  ],
  exports:[TableSampleComponent]
})
export class TableSampleModule { }
