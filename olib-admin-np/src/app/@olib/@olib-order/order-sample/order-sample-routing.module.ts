import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderSampleComponent } from './order-sample.component';

const routes: Routes = [
  {path:'',component:OrderSampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderSampleRoutingModule { }
