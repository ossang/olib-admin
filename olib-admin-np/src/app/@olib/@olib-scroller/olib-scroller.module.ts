import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { OlibScrollerComponent }  from './olib-scroller.component';
import { ScrollDispatchModule }   from '@angular/cdk/scrolling';

@NgModule({
  declarations: [OlibScrollerComponent],
  imports: [
    CommonModule,
    ScrollDispatchModule
  ],
  exports:[
    OlibScrollerComponent
  ]
})
export class OlibScrollerModule { }
