import {Injectable} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({providedIn: 'root'})
export class DatepickerConfig {
    getLocale(){
       return {
            firstDayOfWeek: 0,
            dayNames: ["일", "월", "화", "수", "목", "금", "토"],
            dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
            dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
            monthNames: [ "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ],
            monthNamesShort: [ "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ],
            today: 'Today',
            clear: 'Clear',
            dateFormat: 'yy-mm-dd',
            weekHeader: 'Wk'
          };
    }
}