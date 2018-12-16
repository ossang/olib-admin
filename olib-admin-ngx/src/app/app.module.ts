import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { APP_BASE_HREF }              from '@angular/common';
import { HttpClientModule }           from '@angular/common/http';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';
import { NgbModule }                  from '@ng-bootstrap/ng-bootstrap';

import { CoreModule }                 from './@core/core.module';
import { ThemeModule }                from './@theme/theme.module';
import { AppRoutingModule }           from './app-routing.module';
import { AppComponent }               from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ]
})
export class AppModule { }
