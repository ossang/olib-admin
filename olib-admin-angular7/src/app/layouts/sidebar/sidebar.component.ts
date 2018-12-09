import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'olib-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input("sidebarList")
  sidebarList : any = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  constructor() { }

  ngOnInit() {
  }

}
