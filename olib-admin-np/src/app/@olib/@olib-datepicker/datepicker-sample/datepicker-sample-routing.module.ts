import { NgModule }                   from '@angular/core';
import { Routes, RouterModule }       from '@angular/router';
import { DatepickerSampleComponent }  from './datepicker-sample.component';

const routes: Routes = [
  {path:'',component:DatepickerSampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatepickerSampleRoutingModule { }
