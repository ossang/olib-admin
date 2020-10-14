import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PrimengModule } from '../common/primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { AuthMenuComponent } from './auth/auth-menu/auth-menu.component';
import { TableComponent } from './table/table.component';
import { ComponentsModule } from '../common/components/components.module';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [SearchComponent, RegisterComponent, LoginComponent, AuthComponent, AuthMenuComponent, TableComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    PrimengModule,
    ComponentsModule
  ]
})
export class DemoModule { }
