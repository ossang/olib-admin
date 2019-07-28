import { Component, OnInit }        from '@angular/core';
import { BehaviorSubject }          from 'rxjs';
import { OlibScrollerCols }         from '../olib-scroller-cols.model';
import { OlibScrollerOption }       from '../olib-scroller-option.model';

@Component({
  selector: 'olib-scroller-sample',
  templateUrl: './scroller-sample.component.html',
  styleUrls: ['./scroller-sample.component.scss']
})
export class ScrollerSampleComponent implements OnInit {

  cols : Map<string,OlibScrollerCols>;
  datas: BehaviorSubject<any>;
  option : OlibScrollerOption;

  constructor() { }

  ngOnInit() {
    this.initializeCols();
    this.initializeDatas();
    this.initializeOption();
  }

  initializeCols(){
    this.cols = new Map;
    this.cols.set('idx',new OlibScrollerCols('인덱스','10%'));
    this.cols.set('name',new OlibScrollerCols('이름','20%'));
    this.cols.set('phone',new OlibScrollerCols('전화번호','20%'));
    this.cols.set('address',new OlibScrollerCols('주소','30%'));
    this.cols.set('money',new OlibScrollerCols('잔액','20%'));
  }

  initializeDatas(){
    let testData = new Array;
    for(let i = 0; i<10000; i++){
      testData.push({'idx':i,'name':'사용자 '+i,'phone':'0000'+i,'address':'123-'+i,'money':i});
    }

    this.datas = new BehaviorSubject(testData);
  }

  initializeOption(){
    this.option = new OlibScrollerOption(10);
  }

}
