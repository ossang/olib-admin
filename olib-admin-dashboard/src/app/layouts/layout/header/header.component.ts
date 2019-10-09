import { Component, OnInit, Input } from '@angular/core';
import { NbMenuService, NbSidebarService }            from '@nebular/theme';

@Component({
  selector: 'olib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' ,link:'/auth/login'}];

  constructor(
    private menuService: NbMenuService,
    private sidebarService: NbSidebarService
    ) {
  }

  ngOnInit() {
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(false, 'menu-sidebar');

    return false;
  }
}
