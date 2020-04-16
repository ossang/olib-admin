import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'olib-datepicker-sample',
  templateUrl: './datepicker-sample.component.html',
  styleUrls: ['./datepicker-sample.component.scss']
})
export class DatepickerSampleComponent implements OnInit {

  @Input("showTime")
  showTime : string;

  @Input("mode")
  mode : any;
  
  selectedDate : Date[];
  dateValue : any;

  constructor() { }

  ngOnInit() {
  }

  rangeDates(data){
    this.selectedDate = data;
  }

}
