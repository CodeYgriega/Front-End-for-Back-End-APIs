import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpApiService } from 'src/app/core/services/http-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  items$: Observable<any> = new Observable<any>();

  constructor(private service: HttpApiService){ }

  ngOnInit(): void {
    this.getData();
  }
  
  getData(){
    this.items$ = this.service.getDataURL();
  }

  async eliminar(_event: any){
    const res = await this.service.deleteDataURL(_event).toPromise();
    console.log(res);
    this.getData();
  }
  
}
