import { Component, OnInit, Input } from '@angular/core';
import { EDITOR_CONFIG_CLASSIC } from './olib-editor-config.model';

@Component({
  selector: 'olib-editor',
  templateUrl: './olib-editor.component.html',
  styleUrls: ['./olib-editor.component.scss']
})
export class OlibEditorComponent implements OnInit {

  @Input("body")
  data: any;
  
  config = EDITOR_CONFIG_CLASSIC;
  
  constructor() { }
  
  ngOnInit() {
  }
}
