import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { EditorSampleComponent }  from './editor-sample.component';

const routes: Routes = [
  {path:'',component:EditorSampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorSampleRoutingModule { }
