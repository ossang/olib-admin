import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';

import { EditorSampleRoutingModule }  from './editor-sample-routing.module';
import { EditorSampleComponent }      from './editor-sample.component';
import { OlibEditorModule }           from '../olib-editor.module';

@NgModule({
  declarations: [EditorSampleComponent],
  imports: [
    CommonModule,
    EditorSampleRoutingModule,
    OlibEditorModule
  ],
  exports:[EditorSampleComponent]
})
export class EditorSampleModule { }
