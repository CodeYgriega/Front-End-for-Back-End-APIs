import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { UserdataService } from 'src/app/core/services/userdata.service';
import { WarningHttpRequestsService } from 'src/app/core/services/warning-http-requests.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy{
  
  //array with data
  items: any = [];
  //error message
  error: boolean = false;
  //subject for complete the subscription in ngOnDestroy
  destroy$ = new Subject();
  //paginate
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  
  constructor(
    private userDataService: UserdataService,
    private httpService: HttpApiService,
    private warningService: WarningHttpRequestsService
  ){ }

  ngOnInit(): void {
    this.getData();
    this.subs();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
  
  subs(){
    this.warningService.warning
      .pipe(takeUntil(this.destroy$))
        .subscribe((res: any) => {
          this.getData();
        });
  }

  getData(){
    this.httpService.getDataURL().
      pipe(takeUntil(this.destroy$))
        .subscribe((res: any) => {
          
          const property: any = this.userDataService.getPROP_ACCESS();

          if(res[property]){
            this.error = false;
            this.items = res[property];
          }
          else if(Array.isArray(res)){
            this.error = false;
            this.items = res;
          }
          else{
            this.error = true;
          }

    })
  }

  async eliminar(_event: any){
    const res = await this.httpService.deleteDataURL(_event).toPromise();
    this.getData();
  }
  
}
