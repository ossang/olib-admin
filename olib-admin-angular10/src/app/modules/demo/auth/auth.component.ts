import { Component } from '@angular/core';
import { Admin } from '../../common/abstract/admin.abstract';
import { BreadCrumbConfig } from '../../common/configs/breadcrumb.config';


@Component({
  selector: 'olib-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent extends Admin {
  
  constructor(
    protected breadCrumbConfig : BreadCrumbConfig
  ){
    super(
      breadCrumbConfig,
      "DEMO",
      "Auth");
  }

  initialize() {
  }
  
}
