import { Component, OnInit, Input, SimpleChanges }   from '@angular/core';
import { OlibScrollerCols }           from './olib-scroller-cols.model';
import { OlibScrollerOption }         from './olib-scroller-option.model';
import { BehaviorSubject }            from 'rxjs';

@Component({
  selector: 'olib-scroller',
  templateUrl: './olib-scroller.component.html',
  styleUrls: ['./olib-scroller.component.scss']
})
export class OlibScrollerComponent implements OnInit {

  @Input('cols')
  cols : Map<string,OlibScrollerCols>;

  @Input('datas')
  datas: any;

  @Input('option')
  option : OlibScrollerOption;

  dataList : any;

  constructor() { }

  ngOnInit() {
  }


  sortBy(prop: | 'idx') {
    this.datas.next(this.dataList.map(s => ({ ...s })).sort((a, b) => {
      const aProp = a[prop], bProp = b[prop];
      if (aProp < bProp) {
        return 1;
      } else if (aProp > bProp) {
        return -1;
      }
      return 0;
    }));
  }

}
