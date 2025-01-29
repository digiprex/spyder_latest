import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public success = false;
  members: any;
  slider: any;
  bgColor: any;

  constructor(private appService: AppService, private titleService: Title, private metaService: Meta) { }

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


  testimonialFeedback = [
    {
      description: 'Spyder helps me optimize my workload without sacrificing quality',
      name: 'Olivia Nunn',
      backgroundColor: '#ffe6e6',
      profession: 'Read More',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3f5fa3a4-e80b-4102-b827-1af20f6e5f2d_olivia-nunn-collective-member.jpg'
    },
    {
      description: 'Thanks to spyder, I can focus 100% on my work',
      name: 'John Doe',
      backgroundColor: '#e6d8ff',
      profession: 'Graphic Designer',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b7075e7b-8eed-4dac-8773-e9d3351d70ac_alice-yang-collective-member.jpg'
    },
    {
      description: 'Without spyder, I do not think I would be able to do the work that I love',
      name: 'Jane Smith',
      backgroundColor: '#d8f0e6',
      profession: 'Content Creator',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/276c90a5-e21f-4793-9285-e032803cc4eb_vincent-nguyen-collective-member.jpg'
    }
  ];

  @ViewChild('feedbackSlider', { static: false }) feedbackSlider!: ElementRef<any>;

  scrollTestimonialLeft(): void {
    if (this.testimonialSlider) {
      const sliderElement = this.testimonialSlider.nativeElement;
      const scrollAmount = window.innerWidth < 768 ? 355 : 400; // Adjust scroll for mobile
      sliderElement.scrollLeft -= scrollAmount;
    }
  }

  scrollTestimonialRight(): void {
    if (this.testimonialSlider) {
      const sliderElement = this.testimonialSlider.nativeElement;
      const scrollAmount = window.innerWidth < 768 ? 355 : 400; // Adjust scroll for mobile
      sliderElement.scrollLeft += scrollAmount;
    }
  }


  scrollFeedbackLeft(): void {
    if (this.feedbackSlider) {
      const sliderElement = this.feedbackSlider.nativeElement;
      sliderElement.scrollLeft -= 860;
    }
  }

  scrollFeedbackRight(): void {
    if (this.feedbackSlider) {
      const sliderElement = this.feedbackSlider.nativeElement;
      sliderElement.scrollLeft += 860;
    }
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
    if (this.featuresSlider) {
      console.log('Feedback Slider initialized successfully:', this.feedbackSlider.nativeElement);
    } else {
      console.error('Feedback Slider not found');
    }
  }

  @ViewChild('testimonialSlider', { static: false }) testimonialSlider!: ElementRef<any>;
  @ViewChild('featuresSlider', { static: false }) featuresSlider!: ElementRef<any>;

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
      description: 'We turn challenges into triumphs with passion and dedication. No task is too big, no detail too small!',
      backgroundColor: '#faf9f6',
      profession: 'PR Agency',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/ca085502-09d4-4aad-964f-fa1e56193840_01.png',
      quote: 'Spyder helps me optimize my workload without sacrificing quality',
    },
    {
      name: 'John Doe',
      description: 'At the heart of creativity and innovation, we’re always pushing boundaries with every project we take on.',
      backgroundColor: '#d9ede8',
      profession: 'Graphic Designer',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3dcf2ddf-739f-403d-9e78-02c6f2fc47bd_02.png',
      quote: 'The support I receive from Spyder has been incredible.',
    },
    {
      name: 'Jane Smith',
      description: 'Fueled by creativity, we create magic. We thrive in bringing ideas to life without worrying about the logistics.',
      backgroundColor: '#fff0e5',
      profession: 'Content Creator',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e68ea2cf-446f-4540-8645-720e3d7f9e5e_03.png',
      quote: 'I’m able to focus on my work while Spyder takes care of my taxes.',
    },
    {
      name: 'Alice Yang',
      description: 'Every project is an opportunity to make a difference. We deliver excellence with precision and dedication.',
      backgroundColor: '#e7dce7',
      profession: 'PR Agency',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/275612bf-246e-4530-a615-b4e2b7a005c9_04.png',
      quote: 'Spyder helps me optimize my workload without sacrificing quality',
    },
    {
      name: 'William',
      description: 'Driven by passion and innovation, we tackle every challenge with determination and achieve remarkable results.',
      backgroundColor: '#e7dce7',
      profession: 'PR Agency',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/02f04a1d-cd1a-42bc-995a-c4cf606eab78_05.png',
      quote: 'Spyder helps me optimize my workload without sacrificing quality',
    }
  ];


  images: string[] = [
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/57ec2090-557b-478f-bd18-d4aaca5ee5cf_WhatsAppVideo2025-01-02at6.gif',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/fbd44177-a1dd-44b9-a638-5875d2130ac8_WhatsAppVideo2025-01-02at6.gif'
  ];

  pressFeatures = [
    {
      contentHeading: 'TechCrunch',
      description: 'SpyderDebuts AI-Powered Accounting Tool for Solopreneurs',
      backgroundColor: '#ffe6e6',
      profession: 'Read more',
      pressUrl: '/press',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/86095aae-fba0-4f78-befb-8cf8e2741106_accounting-b2b-payments.jpg'
    },
    {
      contentHeading: 'PUNMTS',
      description: 'Is The $1 Billion, One-Person Business Around The Corner? This Freelance Platform, Which Just Raised $50 Million, Is Betting On A Bold Future For Solopreneurs',
      backgroundColor: '#e6d8ff',
      profession: 'Read more',
      pressUrl: '/press',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8bdf09a9-3790-44b6-8ccd-57c7fbb4d75a_press.jpg'
    },
    {
      contentHeading: 'TechCrunch',
      description: 'Thanks to spyder, I can focus 100% on my work',
      backgroundColor: '#e6d8ff',
      profession: 'Read more',
      pressUrl: '/press',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8bdf09a9-3790-44b6-8ccd-57c7fbb4d75a_press.jpg'
    },
    {
      contentHeading: 'PUNMTS',
      description: 'Is The $1 Billion, One-Person Business Around The Corner? This Freelance Platform, Which Just Raised $50 Million, Is Betting On A Bold Future For Solopreneurs',
      backgroundColor: '#d8f0e6',
      profession: 'Read more',
      pressUrl: '/press',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e370df6d-262b-4658-a736-6dd451feaf66_dennis-belogorsky-collective-member.webp'
    }
  ];

  scrollFeaturesLeft(): void {
    if (this.featuresSlider) {
      const sliderElement = this.featuresSlider.nativeElement;
      const scrollAmount = window.innerWidth < 768 ? 360 : 860; // Adjust scroll for mobile
      sliderElement.scrollLeft -= scrollAmount;
    }
  }

  scrollFeaturesRight(): void {
    if (this.featuresSlider) {
      const sliderElement = this.featuresSlider.nativeElement;
      const scrollAmount = window.innerWidth < 768 ? 360 : 860; // Adjust scroll for mobile
      sliderElement.scrollLeft += scrollAmount;
    }
  }

  currentImage: string = this.images[0];
  private imageInterval: any;

  ngOnInit(): void {
    this.setTitleAndMetaTags();
    let currentIndex = 0;
    this.imageInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % this.images.length;
      this.currentImage = this.images[currentIndex];
    }, 3000);
  }

  setTitleAndMetaTags(): void {
    this.titleService.setTitle('Best Professional Bookkeeping & Tax Assistance Services | Spyder');
    this.metaService.updateTag({ name: 'description', content: 'Learn about our all-in-one financial solution with tax savings through S Corp structuring, professional bookkeeping, tax assistance, payroll, invoicing & more.' });
  }

  ngOnDestroy(): void {
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  }
}
