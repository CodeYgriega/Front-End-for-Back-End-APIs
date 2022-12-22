import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/core/services/userdata.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component {

  form: FormGroup;
  
  constructor(
    private dataService: UserdataService,
    private fb: FormBuilder,
    private router: Router
  ){ 

    this.form = this.fb.group({
      get_url: [this.checkStorage().GET, [Validators.required]],
      post_url: [this.checkStorage().POST],
      put_url: [this.checkStorage().PUT],
      delete_url: [this.checkStorage().DELETE]
    });

    }

  checkStorage(){
    let STORAGE_URLS = {
      GET: this.dataService.getURL_GET(),
      POST: this.dataService.getURL_POST(),
      PUT: this.dataService.getURL_PUT(),
      DELETE: this.dataService.getURL_DELETE()
    };

    STORAGE_URLS.GET !== 'null' ? STORAGE_URLS.GET : STORAGE_URLS.GET = "";
    STORAGE_URLS.POST !== 'null' ? STORAGE_URLS.POST : STORAGE_URLS.POST = "";
    STORAGE_URLS.PUT !== 'null' ? STORAGE_URLS.PUT : STORAGE_URLS.PUT = "";
    STORAGE_URLS.DELETE !== 'null' ? STORAGE_URLS.DELETE : STORAGE_URLS.DELETE = "";

    return STORAGE_URLS;
  }

  submitForm(){
    const get_url = this.form.get("get_url")?.value;
    const post_url = this.form.get("post_url")?.value;
    const put_url = this.form.get("put_url")?.value;
    const delete_url = this.form.get("delete_url")?.value;

    this.dataService.saveURL_GET(get_url);
    this.dataService.saveURL_POST(post_url);
    this.dataService.saveURL_PUT(put_url);
    this.dataService.saveURL_DELETE(delete_url);

    this.router.navigate(["/steps/step2"]);
  }
}
