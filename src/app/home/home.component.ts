import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public success = false;
  members: any;
  slider: any;
  bgColor: any;

  constructor(private appService: AppService) { }

  userDetails1 = new FormGroup({
    email: new FormControl("")
  });

  formSubmit() {
    let body = {
      email: this.userDetails1.value.email
    }
    this.appService.newsletterSubmission(body).subscribe(result => {
      this.success = true;
    })
  }


  benefits = [
    {
      title: 'Accounting',
      description: 'No matter the state of your accounts, we\'ll rebuild your balance sheet.',
      bgColor: '#ffe6e6',
      imgUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/305804fc-2179-48d3-9b90-cc31db6591ec_bethany-joy-collective-member.jpg',
      name: 'Olivia Nunn',
      business: 'PR Agency',
      img: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/539d090f-c24e-4f8c-8fe4-116d6ec3ce52_2.jpg',
      message: 'Your LLC has been successfully formed!'
    },
    {
      title: 'Bookkeeping',
      description: 'Monthly bookkeeping for your income and expenses for healthy financials.',
      bgColor: '#e6d8ff',
      imgUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3f5fa3a4-e80b-4102-b827-1af20f6e5f2d_olivia-nunn-collective-member.jpg',
      name: 'John Smith',
      business: 'Consulting Firm',
      img: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/539d090f-c24e-4f8c-8fe4-116d6ec3ce52_2.jpg',
      message: 'Your books are in order!'
    },
    {
      title: 'Taxes',
      description: 'Receive quarterly tax estimates and business tax returns.',
      bgColor: '#d8f0e6',
      imgUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e370df6d-262b-4658-a736-6dd451feaf66_dennis-belogorsky-collective-member.webp',
      name: 'Alice Johnson',
      business: 'Tax Services',
      img: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/539d090f-c24e-4f8c-8fe4-116d6ec3ce52_2.jpg',
      message: 'Your taxes are filed!'
    },
    {
      title: 'Formation',
      description: 'Organize a new S Corp or turn your existing LLC into one. Learn more about S Corps',
      bgColor: '#ffe6e6',
      imgUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b7075e7b-8eed-4dac-8773-e9d3351d70ac_alice-yang-collective-member.jpg',
      name: 'Olivia Nunn',
      business: 'PR Agency',
      img: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/539d090f-c24e-4f8c-8fe4-116d6ec3ce52_2.jpg',
      message: 'Your LLC has been successfully formed!'
    },
    {
      title: 'Payroll',
      description: 'Pay yourself through your S Corp for maximum tax savings.',
      bgColor: '#e6d8ff',
      imgUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/6ee24a19-8f3f-44b6-8886-58f30ae71669_yana-gilbuena-babu-collective-member.jpg',
      name: 'John Smith',
      business: 'Consulting Firm',
      img: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/539d090f-c24e-4f8c-8fe4-116d6ec3ce52_2.jpg',
      message: 'Your books are in order!'
    },
    {
      title: 'Invoicing*',
      description: 'Stop chasing down clients for payment. Easily send invoices and collect payments from your Dashboard, at no additional cost',
      bgColor: '#d8f0e6',
      imgUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/276c90a5-e21f-4793-9285-e032803cc4eb_vincent-nguyen-collective-member.jpg',
      name: 'Alice Johnson',
      business: 'Tax Services',
      img: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/539d090f-c24e-4f8c-8fe4-116d6ec3ce52_2.jpg',
      message: 'Your taxes are filed!'
    }
  ];

  currentHoverContent = this.benefits[0];

  updateHoverContent(benefit: any) {
    this.currentHoverContent = benefit;
  }

  ngAfterViewInit(): void {
    const steps = document.querySelectorAll('.step');
    const dynamicImage = document.getElementById('dynamic-image') as HTMLImageElement;

    steps.forEach((step) => {
      step.addEventListener('mouseenter', () => {
        const newImage = step.getAttribute('data-image');
        if (dynamicImage && newImage) {
          dynamicImage.src = newImage;
          dynamicImage.style.opacity = '0.7';
          setTimeout(() => {
            dynamicImage.style.opacity = '1';
          }, 300);
        }
      });
    });

    if (this.testimonialSlider) {
      console.log('Slider initialized successfully:', this.testimonialSlider.nativeElement);
    } else {
      console.error('Slider not found');
    }
  }

  @ViewChild('testimonialSlider', { static: false }) testimonialSlider!: ElementRef<any>;

  scrollLeft(): void {
    if (this.testimonialSlider) {
      const sliderElement = this.testimonialSlider.nativeElement;
      sliderElement.scrollLeft -= 200; // Adjust scroll amount
    }
  }

  scrollRight(): void {
    if (this.testimonialSlider) {
      const sliderElement = this.testimonialSlider.nativeElement;
      sliderElement.scrollLeft += 200; // Adjust scroll amount
    }
  }

  testimonials = [
    {
      name: 'Olivia Nunn',
      description: 'Spider helps me optimize my workload without sacrificing quality',
      backgroundColor: '#ffe6e6',
      profession: 'PR Agency',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3f5fa3a4-e80b-4102-b827-1af20f6e5f2d_olivia-nunn-collective-member.jpg',
      quote: 'Spider helps me optimize my workload without sacrificing quality',
    },
    {
      name: 'John Doe',
      description: 'Thanks to Spider, I can focus 100% on my work',
      backgroundColor: '#e6d8ff',
      profession: 'Graphic Designer',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b7075e7b-8eed-4dac-8773-e9d3351d70ac_alice-yang-collective-member.jpg',
      quote: 'The support I receive from Spider has been incredible',
    },
    {
      name: 'Jane Smith',
      description: 'Without Spider, I do not think I would be able to do the work that I love',
      backgroundColor: '#d8f0e6',
      profession: 'Content Creator',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/276c90a5-e21f-4793-9285-e032803cc4eb_vincent-nguyen-collective-member.jpg',
      quote: 'I’m able to focus on my work while Spider takes care of my taxes',
    },
    {
      name: 'Alice Yang',
      description: 'I love working with Spider because I feel like I am being handheld',
      backgroundColor: '#ffe6e6',
      profession: 'PR Agency',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3f5fa3a4-e80b-4102-b827-1af20f6e5f2d_olivia-nunn-collective-member.jpg',
      quote: 'Spider helps me optimize my workload without sacrificing quality',
    }
  ];


  images: string[] = [
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/80046a47-6746-4e0c-9c4b-6d7914c46609_collective-member-jason-polevoi-desktop.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b7075e7b-8eed-4dac-8773-e9d3351d70ac_alice-yang-collective-member.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3f5fa3a4-e80b-4102-b827-1af20f6e5f2d_olivia-nunn-collective-member.jpg'
  ];

  currentImage: string = this.images[0];
  private imageInterval: any;

  ngOnInit(): void {
    let currentIndex = 0;
    this.imageInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % this.images.length;
      this.currentImage = this.images[currentIndex];
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  }
}