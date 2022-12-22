import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserdataService } from './userdata.service';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(
    private userDataService: UserdataService,
    private http: HttpClient
  ) { }
  
  getDataURL(){
    const URL: any = this.userDataService.getURL_GET();
    return this.http.get(URL);
  }

  postDataURL(data: any){
    const URL: any = this.userDataService.getURL_POST();
    return this.http.post(URL, data);
  }

  putDataURL(id: any, data: any){
    const URL: any = this.userDataService.getURL_PUT();
    const completeURL = `${URL}/${id}`;
    return this.http.put(completeURL, data);
  }

  deleteDataURL(id: any){
    const URL: any = this.userDataService.getURL_DELETE();
    const completeURL = `${URL}/${id}`;
    return this.http.delete(completeURL);
  }
}
