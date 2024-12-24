import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public logo = "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c4d37839-2045-41fc-9996-ba9ab93955ab_spyder.svg";
  public links = [
    {
      "text": "Home",
      "link": "/home",
      "type": "internal",
      "options": []
    },
    {
      "text": "Pricing",
      "link": "/pricing",
      "type": "internal",
      "options": []
    }, 
    {
      "text": "Testimonial",
      "link": "/testimonial",
      "type": "internal",
      "options": []
    },
    {
      "text": "About Us",
      "link": "/about",
      "type": "internal",
      "options": []
    },
    {
      "text": "Faq",
      "link": "/faq",
      "type": "internal",
      "options": []
    },
    {
      "text": "Blog",
      "link": "/blog",
      "type": "internal",
      "options": []
    }
  ];
  public close: any;
  public showDropdown: boolean = false;

  change(comm: any) {
    this.close = comm;
    console.log(comm);
  }

  show() {
    this.showDropdown = !this.showDropdown;
  }
}
