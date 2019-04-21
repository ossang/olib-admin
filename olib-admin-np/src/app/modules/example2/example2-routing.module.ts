import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Example2Component } from './example2.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';

const routes: Routes = [
  {path : '', component : Example2Component},
  {path : 'menu1', component : Menu1Component},
  {path : 'menu2', component : Menu2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Example2RoutingModule { }
