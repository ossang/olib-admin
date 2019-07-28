import { Component, OnInit }  from '@angular/core';
import { OlibOrderCols }      from '../olib-order-cols.model';
import { OlibOrderOption }    from '../olib-order-option.model';

@Component({
  selector: 'olib-order-sample',
  templateUrl: './order-sample.component.html',
  styleUrls: ['./order-sample.component.scss']
})
export class OrderSampleComponent implements OnInit {

  cols : Map<string,OlibOrderCols>;
  datas : Array<any>;
  option : OlibOrderOption;

  constructor() { }

  ngOnInit() {
    this.initializeCols();
    this.initializeDatas();
    this.initializeOption();
  }

  initializeCols(){
    this.cols = new Map;
    this.cols.set('order',new OlibOrderCols('순서','10%',false));
    this.cols.set('name',new OlibOrderCols('이름','30%',false));
    this.cols.set('value',new OlibOrderCols('값','25%',false));
    this.cols.set('img',new OlibOrderCols('이미지','35%',true));
  }

  initializeDatas(){
    this.datas = new Array;
    this.datas.push({'order':'1','name':'바나나','value':'111','img':'assets/img/order1.png'});
    this.datas.push({'order':'2','name':'사과','value':'222','img':'assets/img/order2.jpeg'});
    this.datas.push({'order':'3','name':'수박','value':'333','img':'assets/img/order3.jpeg'});
    this.datas.push({'order':'4','name':'끄로잇틀롱','value':'444','img':'assets/img/order4.jpg'});
    this.datas.push({'order':'5','name':'복숭아','value':'555','img':'assets/img/order5.jpeg'});
  }

  initializeOption(){
    this.option = new OlibOrderOption(true);
  }
}
