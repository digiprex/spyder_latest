import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  public success = false;
  members: any;
  slider: any;
  bgColor: any;

  constructor(private appService: AppService) { }

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
      console.log('Testimonial Slider initialized successfully:', this.testimonialSlider.nativeElement);
    } else {
      console.error('Testimonial Slider not found');
    }

    if (this.feedbackSlider) {
      console.log('Feedback Slider initialized successfully:', this.feedbackSlider.nativeElement);
    } else {
      console.error('Feedback Slider not found');
    }

    if (this.featuresSlider) {
      console.log('Feedback Slider initialized successfully:', this.feedbackSlider.nativeElement);
    } else {
      console.error('Feedback Slider not found');
    }
  }

  @ViewChild('testimonialSlider', { static: false }) testimonialSlider!: ElementRef<any>;
  @ViewChild('feedbackSlider', { static: false }) feedbackSlider!: ElementRef<any>;
  @ViewChild('featuresSlider', { static: false }) featuresSlider!: ElementRef<any>;

  scrollTestimonialLeft(): void {
    if (this.testimonialSlider) {
      const sliderElement = this.testimonialSlider.nativeElement;
      sliderElement.scrollLeft -= 500; // Adjust scroll amount
    }
  }

  scrollTestimonialRight(): void {
    if (this.testimonialSlider) {
      const sliderElement = this.testimonialSlider.nativeElement;
      sliderElement.scrollLeft += 500; // Adjust scroll amount
    }
  }

  scrollFeedbackLeft(): void {
    if (this.feedbackSlider) {
      const sliderElement = this.feedbackSlider.nativeElement;
      sliderElement.scrollLeft -= 800;
    }
  }

  scrollFeedbackRight(): void {
    if (this.feedbackSlider) {
      const sliderElement = this.feedbackSlider.nativeElement;
      sliderElement.scrollLeft += 800;
    }
  }


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

  testimonials = [
    {
      name: 'Team',
      description: '“I really enjoy working with Bobby, Jezra and Salma - all have been fantastic to work with, helpful, responsive, and I know I am in good hands with this team.”',
      backgroundColor: '#fff',
      profession: 'Matthew Kluttz'
    },
    {
      name: 'Bookkeeping',
      description: '“I appreciate the access to support when I have questions, and the security that my bookkeeping is being taken care of in the background.”',
      backgroundColor: '#fff',
      profession: 'Matthew Kluttz'
    },
    {
      name: 'Product',
      description: 'spyder provided a structure for business management where I lacked that knowledge. It is nice to know that you have someone who’s got your back.”',
      backgroundColor: '#fff',
      profession: 'Matthew Kluttz'
    },
    {
      name: 'Team',
      description: '“I really enjoy working with Bobby, Jezra and Salma - all have been fantastic to work with, helpful, responsive, and I know I am in good hands with this team.”',
      backgroundColor: '#fff',
      profession: 'Matthew Kluttz'
    },
    {
      name: 'Bookkeeping',
      description: '“I appreciate the access to support when I have questions, and the security that my bookkeeping is being taken care of in the background.”',
      backgroundColor: '#fff',
      profession: 'Matthew Kluttz'
    },
    {
      name: 'Product',
      description: 'spyder provided a structure for business management where I lacked that knowledge. It is nice to know that you have someone who’s got your back.”',
      backgroundColor: '#fff',
      profession: 'Matthew Kluttz'
    }
  ];

  testimonialFeedback = [
    {
      description: 'spyder helps me optimize my workload without sacrificing quality',
      name: 'Olivia Nunn',
      backgroundColor: '#ffe6e6',
      profession: 'PR Agency',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c7678666-d64a-42ee-8ab4-8767559ff13b_Screenshot%202025-01-04%20233441.png'
    },
    {
      description: 'Thanks to spyder, I can focus 100% on my work',
      name: 'John Doe',
      backgroundColor: '#e6d8ff',
      profession: 'Graphic Designer',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3fe93461-7878-44f2-b63f-6257d83a8b1f_Screenshot%202025-01-04%20233457.png'
    },
    {
      description: 'Without spyder, I do not think I would be able to do the work that I love',
      name: 'Jane Smith',
      backgroundColor: '#d8f0e6',
      profession: 'Content Creator',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/97a22076-f87f-4289-a3e8-80261520d71a_Screenshot%202025-01-04%20233511.png'
    }
  ];

  pressFeatures = [
    {
      description: 'spyder Debuts AI-Powered Accounting Tool for Solopreneurs',
      backgroundColor: '#ffe6e6',
      profession: 'PR Agency',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/86095aae-fba0-4f78-befb-8cf8e2741106_accounting-b2b-payments.jpg'
    },
    {
      description: 'Is The $1 Billion, One-Person Business Around The Corner? This Freelance Platform, Which Just Raised $50 Million, Is Betting On A Bold Future For Solopreneurs',
      backgroundColor: '#e6d8ff',
      profession: 'Graphic Designer',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8bdf09a9-3790-44b6-8ccd-57c7fbb4d75a_press.jpg'
    },
    {
      description: 'This Ashton-Kutcher Backed Startup Is Helping The Self-Employed Get Organized',
      backgroundColor: '#d8f0e6',
      profession: 'Content Creator',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/757aa5f6-b81a-4d6b-8141-f2f0776fd995_960x0.jpg'
    },
    {
      description: 'Thanks to spyder, I can focus 100% on my work',
      backgroundColor: '#e6d8ff',
      profession: 'Graphic Designer',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8bdf09a9-3790-44b6-8ccd-57c7fbb4d75a_press.jpg'
    },
    {
      description: 'Is The $1 Billion, One-Person Business Around The Corner? This Freelance Platform, Which Just Raised $50 Million, Is Betting On A Bold Future For Solopreneurs',
      backgroundColor: '#d8f0e6',
      profession: 'Content Creator',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/757aa5f6-b81a-4d6b-8141-f2f0776fd995_960x0.jpg'
    }
  ];

  images: string[] = [
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3bad28ca-4fd3-44a7-a8e6-7d11cd13b4d9_bethany-joy-clark-collective-desktop.webp',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8e2ab7e4-6a7a-4345-9704-18c1eb3704d4_jason-polevoi-collective-desktop.webp',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/703e1bdc-80d6-4155-aa0c-9a0db4753fcd_yana-gilbuena-babu-collective-desktop.webp',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c6846059-dee5-4376-bca9-205705651f04_howie-chan-collective-desktop.webp'
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
