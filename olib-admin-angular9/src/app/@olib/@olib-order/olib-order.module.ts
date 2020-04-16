import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { DragDropModule }       from '@angular/cdk/drag-drop';
import { NbListModule }         from '@nebular/theme';
import { OlibOrderComponent }   from './olib-order.component';

@NgModule({
  declarations: [OlibOrderComponent],
  imports: [
    CommonModule,
    DragDropModule,
    NbListModule
  ],
  exports:[
    OlibOrderComponent
  ]
})
export class OlibOrderModule { }
