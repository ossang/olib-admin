import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { OlibPopupComponent }   from './olib-popup.component';
import { DialogModule }         from 'primeng/dialog';

@NgModule({
  declarations: [OlibPopupComponent],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports:[
    OlibPopupComponent
  ]
})
export class OlibPopupModule { }
