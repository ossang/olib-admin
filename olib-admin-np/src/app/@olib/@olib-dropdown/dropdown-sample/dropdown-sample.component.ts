import { Component, OnInit }  from '@angular/core';
import { OlibDropdown }       from '../olib-dropdown.model';

@Component({
  selector: 'olib-dropdown-sample',
  templateUrl: './dropdown-sample.component.html',
  styleUrls: ['./dropdown-sample.component.scss']
})
export class DropdownSampleComponent implements OnInit {

  options : Array<OlibDropdown>;

  constructor() { }

  ngOnInit() {
    this.options = new Array;
    this.options.push(new OlibDropdown("select",null));
    this.options.push(new OlibDropdown("test1","1"));
    this.options.push(new OlibDropdown("test2","2"));
    this.options.push(new OlibDropdown("test3","3"));
    this.options.push(new OlibDropdown("test4","4"));
  }

  selectedOptionValue(data:OlibDropdown){
    alert("name : "+data.$name + " value : "+data.$value);
  }
}
