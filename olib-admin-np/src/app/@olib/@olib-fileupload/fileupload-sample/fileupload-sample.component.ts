import { Component, OnInit, Input }     from '@angular/core';
import { OlibFileuploadConfig }         from '../olib-fileupload-config.model';
import { OlibFileupload }               from '../olib-fileupload.model';

@Component({
  selector: 'olib-fileupload-sample',
  templateUrl: './fileupload-sample.component.html',
  styleUrls: ['./fileupload-sample.component.scss']
})
export class FileuploadSampleComponent implements OnInit {

  @Input("modify")
  modify:any;

  config : OlibFileuploadConfig;
  file : OlibFileupload;

  constructor() { }

  ngOnInit() {
    this.config = new OlibFileuploadConfig;
    this.config.$accept='.jpg';
    this.config.$authToken='false';
    this.config.$maxFileSize='500000';
    this.config.$url='/test/fileupload';

    this.file = new OlibFileupload;
    this.file.$idx=1;
    this.file.$filePath='assets/img/sample.jpg';
    this.file.$fileSize=20000;
    this.file.$realFileName='sample.jpg';
    this.file.$viewFileName='testfile';
  }

}
