import { NgModule }                           from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import {
  NbAuthComponent
} from '@nebular/auth';

const routes: Routes = [
  { path: 'main', loadChildren: './layouts/main/main.module#MainModule'},
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      { path: 'login', loadChildren :'./modules/login/login.module#LoginModule'}
    ],
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' }
];


const config: ExtraOptions = {
  useHash: true,
};
@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
