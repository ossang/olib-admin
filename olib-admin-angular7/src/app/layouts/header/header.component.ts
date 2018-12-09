import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'olib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input("headerList")
  headerList : any;

  @Output("headerEmitter")
  headerEmitter = new EventEmitter();

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  selectHeader(header){
    if(header.submenu){
      this.headerEmitter.emit(header.submenu);
    }else{
      if(header.path){
        this.router.navigate(["/"+header.path]);
      }
      this.headerEmitter.emit(null);
    }
  }
}
