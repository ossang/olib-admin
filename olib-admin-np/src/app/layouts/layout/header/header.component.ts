import { Component, Input, OnInit }         from '@angular/core';
import { NbMenuService }                    from '@nebular/theme';

@Component({
  selector: 'olib-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
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
