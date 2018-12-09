import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

const routes : Routes = [
  { path: '',                   loadChildren : './layouts/layouts.module#LayoutsModule'  },
  { path:'login',               loadChildren : './modules/login/login.module#LoginModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
