import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  //URL API-USER GET REQUEST
  saveURL_GET(URL: string){
    localStorage.setItem("URL_GET", URL);
  }
  
  getURL_GET(){
    return localStorage.getItem("URL_GET");
  }

  deleteURL_GET(){
    localStorage.removeItem("URL_GET");
  }

  //URL API-USER POST REQUEST
  saveURL_POST(URL: string){
    localStorage.setItem("URL_POST", URL);
  }

  getURL_POST(){
    return localStorage.getItem("URL_POST");
  }

  deleteURL_POST(){
    localStorage.removeItem("URL_POST");
  }

  //URL API-USER PUT REQUEST
  saveURL_PUT(URL: string){
    localStorage.setItem("URL_PUT", URL);
  }

  getURL_PUT(){
    return localStorage.getItem("URL_PUT");
  }

  deleteURL_PUT(){
    localStorage.removeItem("URL_PUT");
  }

    //URL API-USER DELETE REQUEST
    saveURL_DELETE(URL: string){
      localStorage.setItem("URL_DELETE", URL);
    }
  
    getURL_DELETE(){
      return localStorage.getItem("URL_DELETE");
    }
  
    deleteURL_DELETE(){
      localStorage.removeItem("URL_DELETE");
    }

    //API-USER DATA PROPS: PROPERTY TO ACCESS
    savePROP_ACCESS(property: any){
      localStorage.setItem("PROP_ACCESS", property);
    }
    getPROP_ACCESS(){
      return localStorage.getItem("PROP_ACCESS");
    }
    deletePROP_ACCESS(){
      localStorage.removeItem("PROP_ACCESS");
    }    

    //API-USER DATA PROPS: ID
    savePROP_ID(id: string){
      localStorage.setItem("PROP_ID", id);
    }
    getPROP_ID(){
      return localStorage.getItem("PROP_ID");
    }
    deletePROP_ID(){
      localStorage.removeItem("PROP_ID");
    }

    //API-USER DATA PROPS: TITLE
    savePROP_TITLE(title: string){
      localStorage.setItem("PROP_TITLE", title);
    }
    getPROP_TITLE(){
      return localStorage.getItem("PROP_TITLE");
    }
    deletePROP_TITLE(){
      localStorage.removeItem("PROP_TITLE");
    }

}
