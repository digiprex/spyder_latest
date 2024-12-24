import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  formDetails = new FormGroup({
    firstName: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email]),
    message: new FormControl(""),
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
