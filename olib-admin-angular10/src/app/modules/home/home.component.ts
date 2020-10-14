import { Component, OnInit } from '@angular/core';
import { Admin } from '../common/abstract/admin.abstract';
import { BreadCrumbConfig } from '../common/configs/breadcrumb.config';

@Component({
  selector: 'olib-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  constructor(
    protected breadCrombConfig : BreadCrumbConfig
  ){
    
  }
  ngOnInit(): void {
    this.breadCrombConfig.setBreadCrumb("Home","");
  }

}
