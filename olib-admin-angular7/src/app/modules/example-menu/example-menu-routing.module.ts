import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';

const routes: Routes = [
  { path: 'sub4', component: Menu1Component},
  { path: 'sub5', component: Menu2Component},
  { path: 'sub6', component: Menu3Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleMenuRoutingModule { }
