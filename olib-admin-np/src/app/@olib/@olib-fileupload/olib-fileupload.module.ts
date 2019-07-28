import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { OlibFileuploadComponent }  from './olib-fileupload.component';
import { FileUploadModule }         from 'primeng/fileupload';

@NgModule({
  declarations: [OlibFileuploadComponent],
  imports: [
    CommonModule,
    FileUploadModule
  ],
  exports:[
    OlibFileuploadComponent
  ]
})
export class OlibFileuploadModule { }
