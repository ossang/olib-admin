import { Component, OnInit }  from '@angular/core';
import { OlibCheckConfig }    from '../olib-checkbox-config.model';
import { OlibCheckbox }       from '../olib-checkbox.model';

@Component({
  selector: 'olib-checkbox-sample',
  templateUrl: './checkbox-sample.component.html',
  styleUrls: ['./checkbox-sample.component.scss']
})
export class CheckboxSampleComponent implements OnInit {

  sampleConfig : OlibCheckConfig;

  constructor() { }

  ngOnInit() {
    this.sampleConfig = new OlibCheckConfig();
    this.sampleConfig.$allSelectedLabel = "전체선택";
    this.sampleConfig.$isVertical = false;

    let checkboxList = new Array;
    checkboxList.push(new OlibCheckbox(1,"test1"));
    checkboxList.push(new OlibCheckbox(2,"test2"));
    checkboxList.push(new OlibCheckbox(3,"test3"));
    this.sampleConfig.$checkboxList = checkboxList;
  }

}
