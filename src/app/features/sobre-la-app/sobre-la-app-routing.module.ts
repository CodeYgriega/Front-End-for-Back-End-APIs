import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreLaAppComponent } from './sobre-la-app.component';

const routes: Routes = [
  {
    path: "",
    component: SobreLaAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SobreLaAppRoutingModule { }
