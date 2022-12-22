import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsRoutingModule } from './steps-routing.module';
import { StepsComponent } from './steps.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StepsComponent,
    Step1Component,
    Step2Component
  ],
  imports: [
    CommonModule,
    StepsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StepsModule { }
