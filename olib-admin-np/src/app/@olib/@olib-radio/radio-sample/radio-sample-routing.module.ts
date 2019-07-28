import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';
import { RadioSampleComponent }     from './radio-sample.component';

const routes: Routes = [
  {path:'',component:RadioSampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadioSampleRoutingModule { }
