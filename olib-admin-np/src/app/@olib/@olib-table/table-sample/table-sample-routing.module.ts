import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableSampleComponent } from './table-sample.component';

const routes: Routes = [
  {path:"",component:TableSampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableSampleRoutingModule { }
