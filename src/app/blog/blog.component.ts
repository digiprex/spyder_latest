import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.setTitleAndMetaTags();
  }

  setTitleAndMetaTags(): void {
    this.titleService.setTitle('Personal Finance Blog | Your Guide to Financial Success');
    this.metaService.updateTag({ name: 'description', content: 'Explore expert tips, strategies, and advice on managing your money, budgeting, investing, and achieving financial success. Your ultimate guide to personal finance.' });
  }
  
  carouselItems = [
    {
      imageUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/232bbc55-8eb0-46a7-8dd7-ca32d81f8b6d_llc-vs-pllc.jpg',
      title: 'LLC vs. PLLC: Which is Best for Your Business',
      description: 'Many business owners are familiar with limited liability companies (LLCs), but fewer know about professional limited liability companies (PLLCs).',
    },
    {
      imageUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/83883b46-da78-4465-ac7a-208c30e66d85_dropshipping-taxes.jpg',
      title: 'Understanding Dropshipping Taxes',
      description: 'Dropshipping has gained popularity in recent years, but understanding the tax implications is essential for long-term success.',
    },
    {
      imageUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3438b09f-112d-4fa4-8021-0c8beae35d73_what-is-bookkeeping.jpg',
      title: 'What is Bookkeeping and Why Does it Matter?',
      description: 'Bookkeeping is the backbone of any successful business, ensuring you stay on top of your finances and tax obligations.',
    },
  ];

  currentIndex = 0;

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }

  taxTips = [
    {
      title: 'Paying Yourself the Pro Way: Understanding S Corp.',
      author: 'Eric Rosenberg',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/722278dc-55d8-41a3-9a8f-f2d91b684b35_charitable-contributions.jpg', // Replace with your image path
      route: '/service/understandingSorp'
    },
    {
      title: 'Making Charitable Contributions Work for Your...',
      author: 'T.J. Porter',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/232bbc55-8eb0-46a7-8dd7-ca32d81f8b6d_llc-vs-pllc.jpg', // Replace with your image path
      route: '/service/charitableContributions'
    },
    {
      title: 'How to File Taxes for an S Corp',
      author: 'Eric Rosenberg',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/83883b46-da78-4465-ac7a-208c30e66d85_dropshipping-taxes.jpg', // Replace with your image path
      route: '/service/fileTaxes'
    },
    {
      title: 'How to Write Off Meals for your Business',
      author: 'T.J. Porter',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3438b09f-112d-4fa4-8021-0c8beae35d73_what-is-bookkeeping.jpg', // Replace with your image path
      route: '/service/writeOffMeals'
    },
    {
      title: 'Paying Yourself the Pro Way: Understanding S Corp.',
      author: 'Eric Rosenberg',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/722278dc-55d8-41a3-9a8f-f2d91b684b35_charitable-contributions.jpg', // Replace with your image path
      route: '/service/understandingSorp'
    },
    {
      title: 'Making Charitable Contributions Work for Your...',
      author: 'T.J. Porter',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/232bbc55-8eb0-46a7-8dd7-ca32d81f8b6d_llc-vs-pllc.jpg', // Replace with your image path
      route: '/service/charitableContributions'
    },
    {
      title: 'How to File Taxes for an S Corp',
      author: 'Eric Rosenberg',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/83883b46-da78-4465-ac7a-208c30e66d85_dropshipping-taxes.jpg', // Replace with your image path
      route: '/service/fileTaxes'
    },
    {
      title: 'How to Write Off Meals for your Business',
      author: 'T.J. Porter',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3438b09f-112d-4fa4-8021-0c8beae35d73_what-is-bookkeeping.jpg', // Replace with your image path
      route: '/service/writeOffMeals'
    }
  ];

}