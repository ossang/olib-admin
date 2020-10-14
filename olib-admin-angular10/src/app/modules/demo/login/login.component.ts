import { Component, OnInit } from '@angular/core';
import { Admin } from '../../common/abstract/admin.abstract';
import { BreadCrumbConfig } from '../../common/configs/breadcrumb.config';

@Component({
  selector: 'olib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends Admin{
  
  constructor(
    protected breadCrumbConfig : BreadCrumbConfig,
    ) {
      super(breadCrumbConfig,"DEMO","Login");
    }

  initialize() {
  }

}
