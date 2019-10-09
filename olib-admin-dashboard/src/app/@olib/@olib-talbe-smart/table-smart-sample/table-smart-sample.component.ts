import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'olib-table-smart-sample',
  templateUrl: './table-smart-sample.component.html',
  styleUrls: ['./table-smart-sample.component.scss']
})
export class TableSmartSampleComponent implements OnInit {

  settings : any;
  data : any;
  
  constructor() { }

  ngOnInit() {
    this.settings = {
      actions:{
        add:false,
        delete : false,
        edit : false
      },

      columns: {
        id: {
          filter : false,
          title: 'ID'
        },
        name: {
          filter : false,
          title: 'Full Name'
        },
        username: {
          filter : false,
          title: 'User Name'
        },
        email: {
          filter : false,
          title: 'Email'
        }
      }
    };

    this.data = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },
      {
        id: 11,
        name: "Nicholas DuBuque",
        username: "Nicholas.Stanton",
        email: "Rey.Padberg@rosamond.biz"
      }
    ];
  }

}
