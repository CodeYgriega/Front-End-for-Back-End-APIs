import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { FormsModule } from '@angular/forms';
import { TopCardComponent } from './components/top-card/top-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { SharedModule } from 'src/app/shared/shared.module';


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
    FormsModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class ListModule { }
