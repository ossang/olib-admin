import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { NbEvaIconsModule }                 from '@nebular/eva-icons';
import { HttpClientModule }                 from '@angular/common/http';
import { APP_BASE_HREF }                    from '@angular/common';
import { 
  NbThemeModule, 
  NbLayoutModule, 
  NbMenuModule, 
  NbSidebarModule
} from '@nebular/theme';
import { 
  DEFAULT_THEME, 
  COSMIC_THEME, 
  CORPORATE_THEME, 
  DARK_THEME 
} from './styles';

import { AppRoutingModule }                 from './app-routing.module';
import { AppComponent }                     from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'dark' },[ DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME ]),
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbEvaIconsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
