import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "list",
    loadChildren: () => import("./list/list.module").then(m => m.ListModule)
  },
  {
    path: "steps",
    loadChildren: () => import("./steps/steps.module").then(m => m.StepsModule)
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "", 
    redirectTo: "home", 
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
