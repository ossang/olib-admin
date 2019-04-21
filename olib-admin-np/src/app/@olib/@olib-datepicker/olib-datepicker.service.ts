import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OlibDatepickerService {

  constructor() { }

  parseDateString(date:Date){
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
  }

  parseDateStringDetail(date:Date){
    return this.parseDateString(date) + " " + date.getHours() +":"+date.getMinutes()+":"+date.getSeconds();
  }

  getKrLocale(){
    let kr = 
    {
      firstDayOfWeek: 1,
      dayNames: [ "토","일","월","화","수","목","금" ],
      dayNamesShort: [ "토","일","월","화","수","목","금" ],
      dayNamesMin: [ "토","일","월","화","수","목","금" ],
      monthNames: [ "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ],
      monthNamesShort: [ "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ],
      today: '오늘',
      clear: '초기화'
    };
    return kr;
  }
}
