import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreLaAppRoutingModule } from './sobre-la-app-routing.module';
import { SobreLaAppComponent } from './sobre-la-app.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SobreLaAppComponent
  ],
  imports: [
    CommonModule,
    SobreLaAppRoutingModule,
    SharedModule
  ]
})
export class SobreLaAppModule { }
