import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Title, Meta } from '@angular/platform-browser';

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

  constructor(private appService: AppService, private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.setTitleAndMetaTags();
  }

  setTitleAndMetaTags(): void {
    this.titleService.setTitle('Your Guide to Business Financial Solutions | Spyder FAQ');
    this.metaService.updateTag({ name: 'description', content: 'Find all the answers you need about Spyder’s comprehensive financial services for businesses. Our FAQ page simplifies your financial journey.' });
  }

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
