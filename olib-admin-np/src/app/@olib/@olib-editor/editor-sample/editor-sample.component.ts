import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'olib-editor-sample',
  templateUrl: './editor-sample.component.html',
  styleUrls: ['./editor-sample.component.scss']
})
export class EditorSampleComponent implements OnInit {

  data : any;
  
  constructor() { }

  ngOnInit() {
    this.data = 'sample data!!';
  }

}
