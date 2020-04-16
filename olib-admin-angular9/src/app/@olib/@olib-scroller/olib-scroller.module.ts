import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { OlibScrollerComponent }  from './olib-scroller.component';
import { ScrollingModule }        from '@angular/cdk/scrolling';

@NgModule({
  declarations: [OlibScrollerComponent],
  imports: [
    CommonModule,
    ScrollingModule
  ],
  exports:[
    OlibScrollerComponent
  ]
})
export class OlibScrollerModule { }
