import { NgModule }                   from '@angular/core';
import { Routes, RouterModule }       from '@angular/router';
import { DropdownSampleComponent }    from './dropdown-sample.component';

const routes: Routes = [
  {path:'',component:DropdownSampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownSampleRoutingModule { }
