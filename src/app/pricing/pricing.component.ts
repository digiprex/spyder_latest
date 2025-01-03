import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  public services = [
    {
      "title": "Business Formation",
      "icon": "storefront",
      "points": [
        "LLC formation",
        "S Corp election",
        "Tax identification number (EIN)",
        "Operating agreement",
        "Registered agent",
        "Business name validation"
      ]
    },
    {
      "title": "Taxes",
      "icon": "sell",
      "points": [
        "Quarterly tax estimates",
        "Business tax returns (federal and state)",
        "Individual tax returns† (federal and state, powered by our partner TaxFyle)",
        "Preparation and filing reminders"
      ]
    },
    {
      "title": "Bookkeeping and accounting",
      "icon": "account_balance",
      "points": [
        "Bookkeeping setup",
        "Monthly bookkeeping",
        "Monthly financial statements",
        "End of year book close"
      ]
    },
    {
      "title": "Invoicing",
      "icon": "checkbook",
      "points": [
        "Unlimited invoices",
        "Secure credit card and ACH payments",
        "Automated invoice reminders",
        "Recurring invoice payments",
        "Customizable for your services and brand",
        "Track open, overdue, and paid invoices"
      ]
    },
    {
      "title": "Payroll",
      "icon": "savings",
      "points": [
        "Unlimited payroll runs and contractor payments",
        "Automated payroll",
        "Issue and file W-2s and 1099s",
        "Payroll tax return filing",
        "Payroll setup and tax registration",
        "$15 per person per month"
      ]
    },
    {
      "title": "Compliance and support",
      "icon": "health_and_safety",
      "points": [
        "Notifications of entity filing requirements",
        "S Corp reasonable compensation guidance",
        "Support team you can message anytime",
        "Year-round bookkeeping, payroll and tax support"
      ]
    }
  ];

  images: string[] = [
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b76403f1-2502-47f1-9bf3-2e1ff7f60594_pricing-imahes2.jpg',
  ];

  currentImage: string = ''; 
  private imageInterval: any;

  ngOnInit(): void {
    let currentIndex = 0;

    this.currentImage = this.images[0];

    this.imageInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % this.images.length;
      this.currentImage = this.images[currentIndex];
    }, 3000);
  }
}
