import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { MainComponent }          from './main.component';

const routes: Routes = [
  {path:'',component:MainComponent,
    children:[
      { path:'example1', loadChildren: ()=>import('../../modules/example1/example1.module').then(m=>m.Example1Module)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
