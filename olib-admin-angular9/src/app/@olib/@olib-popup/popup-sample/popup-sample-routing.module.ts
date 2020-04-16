import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupSampleComponent } from './popup-sample.component';

const routes: Routes = [
  {path:'',component:PopupSampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupSampleRoutingModule { }
