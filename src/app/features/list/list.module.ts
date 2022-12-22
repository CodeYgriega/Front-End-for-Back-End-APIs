import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { FormsModule } from '@angular/forms';
import { TopCardComponent } from './components/top-card/top-card.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    ListComponent,
    ListCardComponent,
    TopCardComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule
  ]
})
export class ListModule { }
