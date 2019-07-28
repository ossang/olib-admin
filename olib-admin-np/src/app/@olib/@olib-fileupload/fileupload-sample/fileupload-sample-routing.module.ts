import { NgModule }                   from '@angular/core';
import { Routes, RouterModule }       from '@angular/router';
import { FileuploadSampleComponent }  from './fileupload-sample.component';

const routes: Routes = [
  {path:'',component:FileuploadSampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileuploadSampleRoutingModule { }
