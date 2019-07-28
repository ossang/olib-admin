import { Component, OnInit, Input }       from '@angular/core';
import { CdkDragDrop, moveItemInArray }   from '@angular/cdk/drag-drop';
import { OlibOrderCols }                  from './olib-order-cols.model';
import { OlibOrderOption }                from './olib-order-option.model';

@Component({
  selector: 'olib-order',
  templateUrl: './olib-order.component.html',
  styleUrls: ['./olib-order.component.scss']
})
export class OlibOrderComponent implements OnInit {

  @Input('cols')
  cols : Map<string,OlibOrderCols>;

  @Input('datas')
  datas : Array<any>;

  @Input('option')
  option : OlibOrderOption;

  constructor() { }

  ngOnInit() {
  }

  dropEvent(event: CdkDragDrop<{title: string, poster: string}[]>) {
    moveItemInArray(this.datas, event.previousIndex, event.currentIndex);
    this.reorder();
  }

  onTop(data){
    let newList = new Array;
    newList.push(this.datas[data]);

    for(let i = 0; i<this.datas.length; i++){
      if(i === data) continue;
      newList.push(this.datas[i]);
    }

    this.datas = newList;
    this.reorder();
  }

  reorder(){
    this.datas.forEach((order,index)=>{
      order.order = index+1
    });
  }
}
