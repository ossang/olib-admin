import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { TableOption } from './table-option.model';

@Component({
  selector: 'olib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input("cols")    cols:any;
  @Input("datas")   datas:any;
  @Input("options") options:TableOption;

  @ViewChild('dt') table: Table;
  
  constructor() { }

  ngOnInit(): void {
  }

  onDateSelect(value) {
    this.table.filter(this.formatDate(value), 'date', 'equals')
  }

  formatDate(date) {
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (month < 10) {
          month = '0' + month;
      }

      if (day < 10) {
          day = '0' + day;
      }

      return date.getFullYear() + '-' + month + '-' + day;
  }
}
