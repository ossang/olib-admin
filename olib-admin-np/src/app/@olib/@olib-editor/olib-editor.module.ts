import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { NgxTinymceModule }     from 'ngx-tinymce';
import { OlibEditorComponent } from "./olib-editor.component";

@NgModule({
  declarations: [OlibEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxTinymceModule.forRoot({
      baseURL: './assets/',
    })
  ],
  exports:[OlibEditorComponent]
})
export class OlibEditorModule { }
