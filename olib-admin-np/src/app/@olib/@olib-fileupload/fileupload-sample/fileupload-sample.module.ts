import { NgModule }                       from '@angular/core';
import { CommonModule }                   from '@angular/common';

import { FileuploadSampleRoutingModule }  from './fileupload-sample-routing.module';
import { FileuploadSampleComponent }      from './fileupload-sample.component';
import { OlibFileuploadModule }           from '../olib-fileupload.module';

@NgModule({
  declarations: [FileuploadSampleComponent],
  imports: [
    CommonModule,
    FileuploadSampleRoutingModule,
    OlibFileuploadModule
  ],
  exports:[FileuploadSampleComponent]
})
export class FileuploadSampleModule { }
