import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/core/services/userdata.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component {

  form: FormGroup;

  constructor(
    private dataService: UserdataService,
    private fb: FormBuilder,
    private router: Router
  ){ 

    this.form = this.fb.group({
      propertyToAccess: [this.checkStorage().ACCESS],
      id: [this.checkStorage().ID],
      title: [this.checkStorage().TITLE, [Validators.required]]
    });
    console.log("me construi")
  }

  checkStorage(){
    let PROPS_DATA = {
      ACCESS: this.dataService.getPROP_ACCESS(),
      ID: this.dataService.getPROP_ID(),
      TITLE: this.dataService.getPROP_TITLE()
    };

    PROPS_DATA.ACCESS !== 'null' ? PROPS_DATA.ACCESS : PROPS_DATA.ACCESS = "";
    PROPS_DATA.ID !== 'null' ? PROPS_DATA.ID : PROPS_DATA.ID = "";
    PROPS_DATA.TITLE !== 'null' ? PROPS_DATA.TITLE : PROPS_DATA.TITLE = "";

    return PROPS_DATA;
  }

  submitForm(){
    const propertyToAccess_user = this.form.get("propertyToAccess")?.value;
    const id_user = this.form.get("id")?.value;
    const title_user = this.form.get("title")?.value;

    this.dataService.savePROP_ACCESS(propertyToAccess_user);
    this.dataService.savePROP_ID(id_user);
    this.dataService.savePROP_TITLE(title_user);
    console.log("me cmande")
    this.router.navigate(["/list"]);
  }

}
