import { Component, OnInit, ViewChild, Input }  from '@angular/core';
import { FileUpload }                           from 'primeng/fileupload';
import { OlibFileupload }                       from './olib-fileupload.model';
import { OlibFileuploadConfig }                 from './olib-fileupload-config.model';

@Component({
  selector: 'olib-fileupload',
  templateUrl: './olib-fileupload.component.html',
  styleUrls: ['./olib-fileupload.component.scss']
})
export class OlibFileuploadComponent implements OnInit {

  @ViewChild('olibfile') 
  olibfile: FileUpload;

  @Input('config')
  config : OlibFileuploadConfig;

  @Input('file')
  file : OlibFileupload;


  constructor() { }

  ngOnInit() {
  }

  onBeforeSend(event){
    if(this.config.$credentials && this.config.$authToken){
      event.xhr.setRequestHeader("Authorization", `Bearer ${this.config.$authToken}`);
    }
  }

  onUpload(event) {
    alert("file uploaded!");
    this.olibfile.upload();
  }

  deleteFile(file : OlibFileupload){
    if(confirm('delete file? '+file.$viewFileName)){
      this.file = null;
    }
  }
}
