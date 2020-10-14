import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppConfig } from './domain/appconfig';
import { AppConfigService } from './service/appconfigservice';
import { BreadCrumbConfig } from './modules/common/configs/breadcrumb.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  
  menuActive: boolean;
  config: AppConfig;
  public subscription: Subscription;
  
  items: MenuItem[];
  home: MenuItem;

  constructor(
    private configService: AppConfigService,
    private primengConfig: PrimeNGConfig,
    public breadCrumbConfig : BreadCrumbConfig) {

  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => this.config = config);
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  onMenuButtonClick() {
    this.menuActive = true;
    this.addClass(document.body, 'blocked-scroll');
  }

  onMaskClick() {
      this.hideMenu();
  }

  hideMenu() {
      this.menuActive = false;
      this.removeClass(document.body, 'blocked-scroll');
  }

  addClass(element: any, className: string) {
      if (element.classList)
          element.classList.add(className);
      else
          element.className += ' ' + className;
  }

  removeClass(element: any, className: string) {
      if (element.classList)
          element.classList.remove(className);
      else
          element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }

  ngOnDestroy() {
      if (this.subscription) {
          this.subscription.unsubscribe();
      }
  }
}
