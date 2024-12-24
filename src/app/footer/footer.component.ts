import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
    "email": "hello@usespyder.com",
    "phone": "(970) 639-7833",
    "address": "Bundl Financial Technologies Inc, 2055 Limestone Rd Ste 200-c Wilmington, De 19808",
    "hrefEmail": "mailto:hello@usespyder.com",
    "hrefPhone": "tel:(970) 639-7833",
    "map": "https://maps.app.goo.gl/XRJyQmZvrqzTfYcD7"
  };
}
