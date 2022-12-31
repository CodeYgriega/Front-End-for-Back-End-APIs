import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { WarningHttpRequestsService } from 'src/app/core/services/warning-http-requests.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  items$: Observable<any> = new Observable<any>();
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  
  constructor(
    private httpService: HttpApiService,
    private warningService: WarningHttpRequestsService
  ){ }

  ngOnInit(): void {
    this.getData();
    this.subs();
  }
  
  subs(){
    this.warningService.warning.subscribe((res: any) => {
      this.getData();
    })
  }

  getData(){
    this.items$ = this.httpService.getDataURL();
  }

  async eliminar(_event: any){
    const res = await this.httpService.deleteDataURL(_event).toPromise();
    this.getData();
  }
  
}
