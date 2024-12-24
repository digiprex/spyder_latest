import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  formDetails = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email])
  });
  public success: boolean = false;

  constructor(private appService: AppService) { }

  submitForm() {
    let body = {
      ...this.formDetails.value
    }
    this.appService.contactUsSubmission(body).subscribe(result => {
      this.success = true;
      this.formDetails.reset()
    });
  }
}
