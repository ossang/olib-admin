import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { MainComponent }          from './main.component';

const routes: Routes = [{
  path:'',component:MainComponent,
  children:[
      { path:'example1', loadChildren :'../../modules/example1/example1.module#Example1Module'},
      { path:'example2', loadChildren :'../../modules/example2/example2.module#Example2Module'}
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
