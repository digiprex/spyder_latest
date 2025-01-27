import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  formDetails = new FormGroup({
    firstName: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email]),
    plan: new FormControl(""),
    message: new FormControl(""),
  });
  public success: boolean = false;
  
  public links = [
    {
      "text": "Home",
      "link": "/home"
    },
    {
      "text": "About Us",
      "link": "/about"
    },
    {
      "text": "Pricing",
      "link": "/pricing"
    },
    {
      "text": "Testimonial",
      "link": "/testimonial"
    },
    {
      "text": "Faq",
      "link": "/faq"
    },
    {
      "text": "Blog",
      "link": "/blog"
    }
  ];
  public social = {
    "email": "info@usespyder.com",
    "phone": "+1 (970) 639-7833",
    "address": "Bundl Financial Technologies Inc, 2055 Limestone Rd Ste 200-c Wilmington, De 19808",
    "hrefEmail": "mailto:info@usespyder.com",
    "hrefPhone": "tel: +1 (970) 639-7833",
    "map": "https://maps.app.goo.gl/XRJyQmZvrqzTfYcD7"
  };

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
