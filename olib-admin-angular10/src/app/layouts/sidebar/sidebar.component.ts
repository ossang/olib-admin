import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { BreadCrumbConfig } from 'src/app/modules/common/configs/breadcrumb.config';

@Component({
  selector: 'olib-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('submenu', [
        state('hidden', style({
            height: '0',
            overflow: 'hidden',
            opacity: 0,
        })),
        state('visible', style({
            height: '*',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ])
]
})
export class SidebarComponent {

  @Input() active: boolean;

  activeSubmenus: {[key: string]: boolean} = {};

  constructor(private router: Router,
    private breadCrumbConfig : BreadCrumbConfig
    ) {}

  toggleSubmenu(event: Event, name: string) {
      this.activeSubmenus[name] = this.activeSubmenus[name] ? false: true;
      event.preventDefault();
  }

  isSubmenuActive(name: string) {
      if (this.activeSubmenus.hasOwnProperty(name)) {
          return this.activeSubmenus[name];
      }
      else if (this.router.isActive(name, false)) {
          this.activeSubmenus[name] = true;
          return true;
      }

      return false;
  }

  selectMenu(title : string){
    let labelArray = [];
    title.split(",").forEach(l=>{
      labelArray.push({label:l});
    })

    this.breadCrumbConfig.items = labelArray;
  }

}
