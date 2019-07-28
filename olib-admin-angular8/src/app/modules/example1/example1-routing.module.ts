import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Example1Component } from './example1.component';


const routes: Routes = [
  {path:'',component:Example1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Example1RoutingModule { }
