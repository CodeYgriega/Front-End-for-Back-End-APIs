import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { UserdataService } from 'src/app/core/services/userdata.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{

  @Input() item!: any;

  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

  @Output() putRequest: EventEmitter<any> = new EventEmitter<any>();

  id: any = this.userDataService.getPROP_ID();

  arrayForm: any = [
    {
      key: "",
      value: ""
    }
  ];

  constructor(
    private userDataService: UserdataService,
    private service: HttpApiService
  ){ }

  ngOnInit(): void {
    this.checkItem(this.item);
    console.log(this.arrayForm)
  }

  onCloseModal(){
    this.closeModal.emit();
  }

  checkItem(item: any){
    this.arrayForm = [];
    const keys = Object.keys(item);
    const values = Object.values(item);
    
    for(let i=0; i < keys.length; i++){
      this.addInputs();
      this.arrayForm[i].key = keys[i];
      this.arrayForm[i].value = values[i];
    }
  }

  addInputs(){
    this.arrayForm.push({
      key: "",
      value: ""
    })
  }

  deleteInputs(){
    this.arrayForm.pop();
  }

  async sendPutRequest(id: any){
    
    const newArray = this.arrayForm.map((item: any) => {
      return [item.key, item.value];
    });

    const obj = Object.fromEntries(newArray);
    console.log(obj);

    const res = await this.service.putDataURL(id, obj).toPromise();
    console.log(res);

    this.putRequest.emit("sended");
  }

  console(oldValue: any, actualValue: any){

    console.log(oldValue + " " + actualValue);

    this.arrayForm.forEach((item: any) => {
      if(item.value === oldValue){
        item.value = actualValue;
      }
    });
  }

}
