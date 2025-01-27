import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})

export class PressComponent {
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


  testimonialFeedback = [
    {
      description: 'spyder helps me optimize my workload without sacrificing quality',
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
      sliderElement.scrollLeft -= 200; // Adjust scroll amount
    }
  }

  scrollTestimonialRight(): void {
    if (this.testimonialSlider) {
      const sliderElement = this.testimonialSlider.nativeElement;
      sliderElement.scrollLeft += 200; // Adjust scroll amount
    }
  }

  scrollFeedbackLeft(): void {
    if (this.feedbackSlider) {
      const sliderElement = this.feedbackSlider.nativeElement;
      sliderElement.scrollLeft -= 500;
    }
  }

  scrollFeedbackRight(): void {
    if (this.feedbackSlider) {
      const sliderElement = this.feedbackSlider.nativeElement;
      sliderElement.scrollLeft += 500;
    }
  }

  ngAfterViewInit(): void {
    const steps = document.querySelectorAll('.step');

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

  pressReleases1 = [
    {
      title: 'Solopreneurs Readying for Impact of AI, Collective Reports',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/62021d07-c747-46b1-bbd7-124adf9b6d86_solopreneurs-readying-for-impact-of-AI-desktop.webp',
      author: 'Nov 28, 2023'
    },
    {
      title: 'Self-Employed Workers Expect Strong 2023',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f7aff7b4-b077-43f0-8eca-e5ed3f003782_strong-2023-desktop.webp',
      author: 'October 12, 2023',
    },
    {
      title: 'Collective Extends All-in-One Financial Solution for Solopreneurs to All 50 States',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e8b7f5e2-63ac-4a23-a61a-b657375325a0_collective-extends-desktop.webp',
      author: 'May 19, 2024',
    },
    {
      title: 'Collective Unveils Collective Accounting, the First AI-powered Accounting Suite for Businesses-of-One',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8a7fdd7a-8ae3-441d-b55e-7a2f8e7cc29b_collective-unveils-collective-accounting-desktop.webp',
      author: 'May 19, 2024',
    },
    {
      title: 'Even as Expenses Soar, Solopreneurs Expect Strong Close to 2023, Looking to AI for Positive Impacts',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/fd49fded-abf6-416a-9052-9eda66c5a552_looking-to-AI-for-positive-impacts-desktop.webp',
      author: 'Nov 28, 2023',
    },
    {
      title: 'Gen Z, Young Millennials Nearly Twice As Likely To Plan for Layoffs, Self-Employment',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/a17b1b10-1ba0-4c02-9fcb-306ffd00a4e5_gen-Z-young-millennials-desktop.webp',
      author: 'October 12, 2023',
    },
    {
      title: 'Collective Raises $50M to Become First AI-Powered Finance Platform for Freelancers',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/64e16af8-74d7-40f9-b2ab-2819ab261359_collective-raises-50M-desktop.webp',
      author: 'August 1, 2023',
    }
  ];

  pressReleases2 = [
    {
      title: 'Collective Unveils Collective Accounting, the First AI-powered Accounting Suite for Businesses-of-One',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8a7fdd7a-8ae3-441d-b55e-7a2f8e7cc29b_collective-unveils-collective-accounting-desktop.webp',
      author: 'May 19, 2024',
      route: '/service/understandingSorp'
    },
    {
      title: 'Even as Expenses Soar, Solopreneurs Expect Strong Close to 2023, Looking to AI for Positive Impacts',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/fd49fded-abf6-416a-9052-9eda66c5a552_looking-to-AI-for-positive-impacts-desktop.webp',
      author: 'Nov 28, 2023',
      route: '/service/charitableContributions'
    },
    {
      title: 'Gen Z, Young Millennials Nearly Twice As Likely To Plan for Layoffs, Self-Employment',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/a17b1b10-1ba0-4c02-9fcb-306ffd00a4e5_gen-Z-young-millennials-desktop.webp',
      author: 'October 12, 2023',
      route: '/service/fileTaxes'
    },
    {
      title: 'Collective Raises $50M to Become First AI-Powered Finance Platform for Freelancers',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/64e16af8-74d7-40f9-b2ab-2819ab261359_collective-raises-50M-desktop.webp',
      author: 'August 1, 2023',
      route: '/service/writeOffMeals'
    },
    {
      title: 'Solopreneurs Readying for Impact of AI, Collective Reports',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/62021d07-c747-46b1-bbd7-124adf9b6d86_solopreneurs-readying-for-impact-of-AI-desktop.webp',
      author: 'Nov 28, 2023',
      route: '/service/understandingSorp'
    },
    {
      title: 'Self-Employed Workers Expect Strong 2023',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/f7aff7b4-b077-43f0-8eca-e5ed3f003782_strong-2023-desktop.webp',
      author: 'October 12, 2023',
      route: '/service/charitableContributions'
    },
    {
      title: 'Collective Extends All-in-One Financial Solution for Solopreneurs to All 50 States',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e8b7f5e2-63ac-4a23-a61a-b657375325a0_collective-extends-desktop.webp',
      author: 'May 19, 2024',
      route: '/service/fileTaxes'
    }
  ];


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
      name: 'Forbes',
      description: 'Forbes values quality work, ensuring clients receive exceptional service and unwavering support, making excellence a core part of our mission.',
      backgroundColor: '#faf9f6',
      profession: 'PR Agency',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8ffbaa89-12b4-44a4-a6e7-783333f22279_Screenshot%202024-12-23%20005518.png',
      quote: 'Spyder helps optimize our workload with efficiency, ensuring quality work while allowing us to focus on business growth and expansion.',
    },
    {
      name: 'Business Insider',
      description: 'Business Insider focuses on delivering top-notch services, emphasizing client satisfaction, precision, and continuous improvement in all our projects.',
      backgroundColor: '#d9ede8',
      profession: 'Graphic Designer',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/01567921-7ae8-40e1-8379-e82262f056e2_Screenshot%202024-12-23%20005527.png',
      quote: 'Spyder’s outstanding support ensures project deadlines are met without compromising on quality or creativity, making collaboration seamless and efficient.',
    },
    {
      name: 'TechCrunch',
      description: 'TechCrunch is committed to insightful content creation, delivering value through well-researched stories with integrity and audience engagement.',
      backgroundColor: '#fff0e5',
      profession: 'Content Creator',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/1730b7b9-1ee0-4435-87d6-a1dff33a10b9_Screenshot%202024-12-23%20005546.png',
      quote: 'Spyder’s financial support has allowed us to focus on creative content while handling financial tasks with exceptional professionalism.',
    },
    {
      name: 'Business Insider',
      description: 'Business Insider builds professional relationships by providing outstanding public relations services with attention to detail and excellence.',
      backgroundColor: '#e7dce7',
      profession: 'PR Agency',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c322cc67-f9e7-41c7-b16c-b7b4e384ec03_Screenshot%202024-12-23%20005558.png',
      quote: 'Spyder’s support has optimized our daily operations, ensuring smooth financial management while focusing on PR strategies and business expansion.',
    },
    {
      name: 'Crunchbase',
      description: 'Crunchbase provides business insights with accuracy, helping organizations make informed decisions with reliable data and in-depth market analysis.',
      backgroundColor: '#e7dce7',
      profession: 'PR Agency',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c322cc67-f9e7-41c7-b16c-b7b4e384ec03_Screenshot%202024-12-23%20005558.png',
      quote: 'Spyder’s services have enhanced our productivity, enabling us to prioritize data delivery while they expertly handle financial processes.',
    },
    {
      name: 'USA TODAY',
      description: 'USA TODAY is committed to providing reliable journalism, focusing on accuracy, integrity, and impactful storytelling across all media platforms.',
      backgroundColor: '#e7dce7',
      profession: 'PR Agency',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c322cc67-f9e7-41c7-b16c-b7b4e384ec03_Screenshot%202024-12-23%20005558.png',
      quote: 'Spyder’s support has simplified our financial operations, letting us focus on producing high-quality content with ease and confidence.',
    },
    {
      name: 'Fast Company',
      description: 'Fast Company emphasizes creativity and innovation, delivering industry-leading ideas with a focus on forward-thinking strategies and storytelling.',
      backgroundColor: '#e7dce7',
      profession: 'PR Agency',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c322cc67-f9e7-41c7-b16c-b7b4e384ec03_Screenshot%202024-12-23%20005558.png',
      quote: 'Spyder has revolutionized our workflow, allowing us to focus on creative excellence while they manage our financial tasks seamlessly.',
    }
  ];



  images: string[] = [
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/64042ea3-1d9c-4cec-ae9f-d35bfae763fb_Screenshot%202025-01-05%20003438.png'
  ];


  pressFeatures = [
    {
      contentHeading: 'February 28, 2023',
      description: '2022-2023 Collective B1 Economic Report',
      backgroundColor: '#ffe6e6',
      profession: 'Read more',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/79e4e5b7-9f4c-4a9a-aa45-c26af3eb8a20_2022-B1-economic-report-desktop.webp'
    },
    {
      contentHeading: 'November 8, 2023',
      description: '2023 Collective B1 Economic Report',
      backgroundColor: '#e6d8ff',
      profession: 'Read more',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/cd9c2f72-94d6-4279-89d9-56b6b9a80902_2023-B1-economic-report-desktop.webp'
    },
    {
      contentHeading: 'February 28, 2023',
      description: '2022-2023 Collective B1 Economic Report',
      backgroundColor: '#ffe6e6',
      profession: 'Read more',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/86095aae-fba0-4f78-befb-8cf8e2741106_accounting-b2b-payments.jpg'
    },
    {
      contentHeading: 'November 8, 2023',
      description: '2023 Collective B1 Economic Report',
      backgroundColor: '#e6d8ff',
      profession: 'Read more',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8bdf09a9-3790-44b6-8ccd-57c7fbb4d75a_press.jpg'
    },
    {
      contentHeading: 'February 28, 2023',
      description: '2022-2023 Collective B1 Economic Report',
      backgroundColor: '#ffe6e6',
      profession: 'Read more',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/cd9c2f72-94d6-4279-89d9-56b6b9a80902_2023-B1-economic-report-desktop.webp'
    },
    {
      contentHeading: 'November 8, 2023',
      description: '2023 Collective B1 Economic Report',
      backgroundColor: '#e6d8ff',
      profession: 'Read more',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/79e4e5b7-9f4c-4a9a-aa45-c26af3eb8a20_2022-B1-economic-report-desktop.webp'
    }
  ];


  scrollFeaturesLeft(): void {
    if (this.featuresSlider) {
      const sliderElement = this.featuresSlider.nativeElement;
      sliderElement.scrollLeft -= 600;
    }
  }

  scrollFeaturesRight(): void {
    if (this.featuresSlider) {
      const sliderElement = this.featuresSlider.nativeElement;
      sliderElement.scrollLeft += 600;
    }
  }

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

