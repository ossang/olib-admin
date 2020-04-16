import { Component, OnInit, Input } from '@angular/core';
import { NbMenuService }            from '@nebular/theme';

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
    private menuService: NbMenuService
    ) {
  }

  ngOnInit() {
  }

  goToHome() {
    this.menuService.navigateHome();
  }

}
