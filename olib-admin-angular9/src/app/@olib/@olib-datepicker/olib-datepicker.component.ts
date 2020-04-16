import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'olib-datepicker',
  templateUrl: './olib-datepicker.component.html',
  styleUrls: ['./olib-datepicker.component.scss']
})
export class OlibDatepickerComponent implements OnInit {

  @Output("rangeDates") rangeDatesEmitter = new EventEmitter<Date[]>();

  @Input("showTime")
  showTime : string;

  @Input("mode")
  mode : string;

  @Input("style")
  style : string;

  rangeDates: Date[];

  kr:any;

  constructor() { }

  ngOnInit() {
    this.kr = {
      firstDayOfWeek: 0,
      dayNames: [ "일","월","화","수","목","금","토"],
      dayNamesShort: [ "일","월","화","수","목","금","토"],
      dayNamesMin: [ "일","월","화","수","목","금","토" ],
      monthNames: [ "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ],
      monthNamesShort: [ "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ],
      today: '오늘',
      clear: '초기화'
    }
  }

  selectedDate(data){
    this.rangeDatesEmitter.emit(this.rangeDates);
  }
}
