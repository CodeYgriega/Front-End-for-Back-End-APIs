import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StepsComponent } from './steps.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';

const routes: Routes = [
  {
    path: "",
    component: StepsComponent,
    children: [
      {
        path: "step2", component: Step2Component
      },
      {
        path: "step1", component: Step1Component
      },
      {
        path: "", redirectTo: "step1", pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepsRoutingModule { }
