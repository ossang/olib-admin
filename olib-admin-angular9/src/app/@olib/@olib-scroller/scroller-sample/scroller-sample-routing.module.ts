import { NgModule }                   from '@angular/core';
import { Routes, RouterModule }       from '@angular/router';
import { ScrollerSampleComponent }    from './scroller-sample.component';

const routes: Routes = [
  {path:'',component:ScrollerSampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrollerSampleRoutingModule { }
