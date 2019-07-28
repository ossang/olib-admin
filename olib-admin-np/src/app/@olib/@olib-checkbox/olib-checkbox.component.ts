import { Component, OnInit, Input } from '@angular/core';
import { OlibCheckConfig }          from './olib-checkbox-config.model';

@Component({
  selector: 'olib-checkbox',
  templateUrl: './olib-checkbox.component.html',
  styleUrls: ['./olib-checkbox.component.scss']
})
export class OlibCheckboxComponent implements OnInit {

  @Input("config")
  config : OlibCheckConfig;

  allChecked : boolean;
  checkBoxSet : any = new Set<number>(); 
  checkBoxMap =new Map<number,boolean>(); 

  constructor() { }

  ngOnInit() {
    this.initializeCheckbox();
  }

  initializeCheckbox(){
    this.config.$checkboxList.forEach(checkbox=>{
      this.checkBoxMap.set(checkbox.$key,false);
    });
  }

  allSelcted(){
    this.checkBoxSet.clear();
    this.allChecked = true;
    this.config.$value = new Array<any>();
    
    Array.from(this.checkBoxMap.keys()).forEach(key=>{
      this.checkBoxMap.set(key,false);
      this.config.$value.push(key);
    });
  }

  toggleCheckValue(id){
    this.allChecked = false;
    if(this.checkBoxSet.has(id)){
      this.checkBoxSet.delete(id);
      this.checkBoxMap.set(id,false);
    }else{
      this.checkBoxSet.add(id);
      this.checkBoxMap.set(id,true);
    }

    this.config.$value = new Array<any>();
    Array.from(this.checkBoxSet).forEach(key=>{
      this.config.$value.push(key);
    })
  }
}
