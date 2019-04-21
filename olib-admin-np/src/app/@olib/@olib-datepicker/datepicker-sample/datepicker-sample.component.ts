import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'olib-datepicker-sample',
  templateUrl: './datepicker-sample.component.html',
  styleUrls: ['./datepicker-sample.component.scss']
})
export class DatepickerSampleComponent implements OnInit {

  selectedDate : Date[];
  
  constructor() { }

  ngOnInit() {
  }

  rangeDates(data){
    this.selectedDate = data;
  }

}
