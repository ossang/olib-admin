import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OlibDropdown }                                   from './olib-dropdown.model';

@Component({
  selector: 'olib-dropdown',
  templateUrl: './olib-dropdown.component.html',
  styleUrls: ['./olib-dropdown.component.scss']
})
export class OlibDropdownComponent implements OnInit {

  @Input("options") options : OlibDropdown;

  @Output("selectedOptionValue") optionEmitter = new EventEmitter<OlibDropdown>();
  
  selectedOptionValue : OlibDropdown;

  constructor() { }

  ngOnInit() {
  }

  selectedOption(){
    this.optionEmitter.emit(this.selectedOptionValue);
  }
  

}
