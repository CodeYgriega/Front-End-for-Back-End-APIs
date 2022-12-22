import { Component, EventEmitter, Output } from '@angular/core';
import { HttpApiService } from 'src/app/core/services/http-api.service';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.css']
})
export class TopCardComponent {

  @Output() postRequest: EventEmitter<any> = new EventEmitter<any>();

  arrayForm: any = [
    {
      key: "",
      value: ""
    }
  ];

  constructor(private service: HttpApiService){ }

  addInputs(){
    const obj = {
      key: "",
      value: ""
    }
    this.arrayForm.push(obj);
  }

  deleteInputs(){
    this.arrayForm.pop();
  }

  async sendPostRequest(){
    this.postRequest.emit("sended");

    const newArray = this.arrayForm.map((item: any) => {
      return [item.key, item.value];
    });

    const obj = Object.fromEntries(newArray);
    console.log(obj);
    
    const res = await this.service.postDataURL(obj).toPromise();
    console.log(res);
  }
  

}
