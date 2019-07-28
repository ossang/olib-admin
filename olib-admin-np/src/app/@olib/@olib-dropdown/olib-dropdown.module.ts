import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { CommonModule }           from '@angular/common';
import { OlibDropdownComponent }  from './olib-dropdown.component';
import { DropdownModule }         from 'primeng/dropdown';

@NgModule({
  declarations: [OlibDropdownComponent],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule
  ],
  exports:[
    OlibDropdownComponent
  ]
})
export class OlibDropdownModule { }
