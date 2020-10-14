import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Admin } from '../../common/abstract/admin.abstract';
import { BreadCrumbConfig } from '../../common/configs/breadcrumb.config';

@Component({
  selector: 'olib-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends Admin{
  
  city : any;
  selectedCities: string[] = [];
  
  constructor(
    protected breadCrumbConfig : BreadCrumbConfig,
    ) {
      super(breadCrumbConfig,"DEMO","Register");
  }
  
  initialize() {
  }

}
