import { Component } from '@angular/core';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { WarningHttpRequestsService } from 'src/app/core/services/warning-http-requests.service';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.css']
})
export class TopCardComponent {

  arrayForm: any = [
    {
      key: "",
      value: ""
    }
  ];

  constructor(
    private httpService: HttpApiService,
    private warningService: WarningHttpRequestsService
  ){ }

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

    const newArray = this.arrayForm.map((item: any) => {
      return [item.key, item.value];
    });

    const obj = Object.fromEntries(newArray);
    
    const res = await this.httpService.postDataURL(obj).toPromise();

    this.warningService.warning.emit();
    
  }
  

}
