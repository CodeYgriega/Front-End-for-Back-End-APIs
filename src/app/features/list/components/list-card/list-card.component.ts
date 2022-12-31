import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserdataService } from 'src/app/core/services/userdata.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent {

  @Output() clickedDelete: EventEmitter<any> = new EventEmitter<any>();

  @Input() item!: any;

  id: any = this.userDataService.getPROP_ID();

  title: any = this.userDataService.getPROP_TITLE();

  selectedItem = null;

  constructor(public userDataService: UserdataService){ }

  sendID(id: string){
    this.clickedDelete.emit(id);
  }

  setSelectedItem(item: any){
    this.selectedItem = item;
  }
  
}
