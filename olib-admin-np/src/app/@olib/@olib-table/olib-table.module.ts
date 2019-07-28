import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { ReactiveFormsModule }  from '@angular/forms';
import { TableModule }          from 'primeng/table';
import { OlibTableComponent }   from './olib-table.component';

@NgModule({
  declarations: [OlibTableComponent],
  imports: [
    CommonModule,
    TableModule,
    ReactiveFormsModule
  ],
  exports:[
    OlibTableComponent
  ]
})
export class OlibTableModule { }
