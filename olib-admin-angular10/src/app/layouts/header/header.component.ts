import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { trigger, style, transition, animate, AnimationEvent } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
import { AppConfigService } from 'src/app/service/appconfigservice';
import { AppConfig } from 'src/app/domain/appconfig';
import { Subscription } from 'rxjs';

@Component({
  selector: 'olib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('overlayMenuAnimation', [
        transition(':enter', [
            style({opacity: 0, transform: 'scaleY(0.8)'}),
            animate('.12s cubic-bezier(0, 0, 0.2, 1)', style({ opacity: 1, transform: '*' })),
          ]),
          transition(':leave', [
            animate('.1s linear', style({ opacity: 0 }))
          ])
    ]) 
]
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() menuButtonClick: EventEmitter<any> = new EventEmitter();
  @ViewChild('topbarMenu') topbarMenu: ElementRef;
  
  config: AppConfig;
  activeMenuIndex: number;
  outsideClickListener: any;
  subscription: Subscription;
  
  logoMap = {
    'bootstrap4-light-blue': 'bootstrap4-light-blue.svg',
    'bootstrap4-light-purple': 'bootstrap4-light-purple.svg',
    'bootstrap4-dark-blue': 'bootstrap4-dark-blue.svg',
    'bootstrap4-dark-purple': 'bootstrap4-dark-purple.svg',
    'md-light-indigo': 'md-light-indigo.svg',
    'md-light-deeppurple': 'md-light-deeppurple.svg',
    'md-dark-indigo': 'md-dark-indigo.svg',
    'md-dark-deeppurple': 'md-dark-deeppurple.svg',
    'mdc-light-indigo': 'md-light-indigo.svg',
    'mdc-light-deeppurple': 'md-light-deeppurple.svg',
    'mdc-dark-indigo': 'md-dark-indigo.svg',
    'mdc-dark-deeppurple': 'md-dark-deeppurple.svg',
    'saga-blue': 'saga-blue.png',
    'saga-green': 'saga-green.png',
    'saga-orange': 'saga-orange.png',
    'saga-purple': 'saga-purple.png',
    'vela-blue': 'vela-blue.png',
    'vela-green': 'vela-green.png',
    'vela-orange': 'vela-orange.png',
    'vela-purple': 'vela-purple.png',
    'arya-blue': 'arya-blue.png',
    'arya-green': 'arya-green.png',
    'arya-orange': 'arya-orange.png',
    'arya-purple': 'arya-purple.png',
    'nova': 'nova.png',
    'nova-alt': 'nova-alt.png',
    'nova-accent': 'nova-accent.png',
    'nova-vue': 'nova-vue.png',
    'luna-blue': 'luna-blue.png',
    'luna-green': 'luna-green.png',
    'luna-pink': 'luna-pink.png',
    'luna-amber': 'luna-amber.png',
    'rhea': 'rhea.png'
};


  constructor(
    private router: Router, 
    private configService: AppConfigService) { }

  ngOnInit() {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => this.config = config);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          this.activeMenuIndex = null;
       }
  });
  }

  toggleMenu(event: Event, index: number) {
    this.activeMenuIndex = this.activeMenuIndex === index ? null : index;
    event.preventDefault();
  }

  onOverlayMenuEnter(event: AnimationEvent) {
    switch(event.toState) {
        case 'visible':
            this.bindOutsideClickListener();
        break;

        case 'void':
            this.unbindOutsideClickListener();
        break;
    }
  }

  bindOutsideClickListener() {
    if (!this.outsideClickListener) {
        this.outsideClickListener = (event) => {
            if (this.isOutsideTopbarMenuClicked(event)) {
                this.activeMenuIndex =  null;
            }
        };

        document.addEventListener('click', this.outsideClickListener);
    }
  }

  isOutsideTopbarMenuClicked(event): boolean {
    return !(this.topbarMenu.nativeElement.isSameNode(event.target) || this.topbarMenu.nativeElement.contains(event.target));
  }

  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
        document.removeEventListener('click', this.outsideClickListener);
        this.outsideClickListener = null;
    }
  }

  changeTheme(event: Event, theme: string, dark: boolean) {
    let themeElement = document.getElementById('theme-link');
    themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.config.theme, theme));
    this.configService.updateConfig({...this.config, ...{theme, dark}});
    this.activeMenuIndex = null;
    event.preventDefault();
  }

  onMenuButtonClick(event: Event) {
    this.menuButtonClick.emit();
    event.preventDefault();
  }
  
  ngOnDestroy() {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
  }
}
