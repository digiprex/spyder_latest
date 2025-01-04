import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  currentPost: any;
  articles: any;
  host: string | undefined;

  constructor() { }
  posts: { [key: string]: any } = {
    understandingSorp: {
      title: 'Paying Yourself the Pro Way: Understanding S Corp.',
      image:
        'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/722278dc-55d8-41a3-9a8f-f2d91b684b35_charitable-contributions.jpg',
      intro:
        'If you’re considering switching to S Corp taxation, it’s important to understand how S Corp distributions work. S Corp distributions are the method small business owners use to get paid while lowering their self-employment tax liability. Here’s a look at how S Corp distributions work and how they can help you take more control over your tax bill.',
      subHeading: 'Understanding S Corp distributions',
      content:
        'When you own an S Corp or an LLC taxed as an S Corp, you’re paid in two different ways. First, you receive a regular salary for the work you do for your business. Second, you get a distribution for profits your company generates.',
    },
    charitableContributions: {
      title: 'Making Charitable Contributions Work for Your Business',
      image:
        'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/232bbc55-8eb0-46a7-8dd7-ca32d81f8b6d_llc-vs-pllc.jpg',
      intro:
        'Charitable contributions can be a great way to give back while benefiting your business’s financial health. Understanding the tax implications and best practices can make all the difference.',
      subHeading: 'Maximizing the Benefits of Charitable Giving',
      content:
        'When your business makes charitable contributions, it may be eligible for tax deductions. This guide covers how to track donations, choose reputable organizations, and ensure your contributions align with your business goals and values.',
    },
    fileTaxes: {
      title: 'How to File Taxes for an S Corp',
      image:
        'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/83883b46-da78-4465-ac7a-208c30e66d85_dropshipping-taxes.jpg',
      intro:
        'Filing taxes for an S Corp requires a different approach compared to other business structures. Proper preparation and understanding can save you time and avoid penalties.',
      subHeading: 'Step-by-Step Guide to Filing S Corp Taxes',
      content:
        'Filing taxes for your S Corp involves preparing your Schedule K-1, Form 1120S, and understanding how profits and losses pass through to shareholders. This article simplifies the process and highlights key deadlines.',
    },
    writeOffMeals: {
      title: 'How to Write Off Meals for Your Business',
      image:
        'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3438b09f-112d-4fa4-8021-0c8beae35d73_what-is-bookkeeping.jpg',
      intro:
        'Did you know that you can write off business meals to reduce your tax burden? Learn how to take advantage of this deduction while staying compliant.',
      subHeading: 'Rules and Limits for Meal Deductions',
      content:
        'The IRS allows you to write off 50% or 100% of certain business meals, depending on the circumstances. This article explains eligible expenses, record-keeping tips, and common mistakes to avoid.',
    },
  };

  ngOnInit(): void {
    this.host = this.getCurrentHost();
    this.currentPost = this.posts[this.host];
  }

  private getCurrentHost(): string {
    const urlSegments = window.location.href.split('/');
    const lastSegment = urlSegments[urlSegments.length - 1];

    return Object.keys(this.posts).includes(lastSegment) ? lastSegment : 'understandingSorp';
  }

}
