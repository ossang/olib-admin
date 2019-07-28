import { Component, OnInit, Input }     from '@angular/core';
import { OlibTableOptionModel }         from './olib-table-option.model';

@Component({
  selector: 'olib-table',
  templateUrl: './olib-table.component.html',
  styleUrls: ['./olib-table.component.scss']
})
export class OlibTableComponent implements OnInit {

  @Input("cols")    cols:any;
  @Input("datas")   datas:any;
  @Input("options") options:OlibTableOptionModel;

  selectedValues = new Array;
  
  constructor() { }

  ngOnInit() {
  }

}
