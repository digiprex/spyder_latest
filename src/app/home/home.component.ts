import { Component, HostListener } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

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
  activeImageIndex: number = 0;

  constructor(private appService: AppService, private titleService: Title, private metaService: Meta) { }

  setTitleAndMetaTags(): void {
    this.titleService.setTitle('Spyder website for influencers');
    this.metaService.updateTag({ name: 'description', content: 'The all-in-one financial solution for self-employed entrepreneurs' });
  }

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

  setActiveImage(index: number) {
    this.activeImageIndex = index;
  }

  peaceOfMind = [
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/a51da540-7753-48bd-83ce-d9b038825b4c_videoframe2.png',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3f5fa3a4-e80b-4102-b827-1af20f6e5f2d_olivia-nunn-collective-member.jpg',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/80046a47-6746-4e0c-9c4b-6d7914c46609_collective-member-jason-polevoi-desktop.jpg'
  ];

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollPosition = window.scrollY;
    const sectionHeight = window.innerHeight;
    this.activeImageIndex = Math.floor(scrollPosition / sectionHeight) % this.peaceOfMind.length;
  }

  benefits = [
    {
      title: 'Accounting',
      description: 'Rebuild your balance sheet and keep your financials accurate and updated.',
      bgColor: '#ffe6e6',
      imgUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/305804fc-2179-48d3-9b90-cc31db6591ec_bethany-joy-collective-member.jpg',
      name: 'Bethany Joy',
      business: 'Financial Services',
      img: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/2d28f92c-aee6-4054-8cac-65a60401c119_house_24dp_000_FILL0_wght400_GRAD0_opsz24.png',
      message: 'Your accounts are perfectly balanced!',
      btnText: 'Learn More',
      urlBtn: '/pricing'
    },
    {
      title: 'Bookkeeping',
      description: 'Keep your financial records updated with monthly bookkeeping services.',
      bgColor: '#e6d8ff',
      imgUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3f5fa3a4-e80b-4102-b827-1af20f6e5f2d_olivia-nunn-collective-member.jpg',
      name: 'John Doe',
      business: 'Consulting',
      img: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c2b956c9-bf2b-4c19-b480-c412e13fa43f_developer_guide_24dp_000_FILL0_wght400_GRAD0_opsz24.png',
      message: 'Your bookkeeping is in perfect order!',
      btnText: 'Learn More',
      urlBtn: '/pricing'
    },
    {
      title: 'Taxes',
      description: 'Get help with quarterly tax estimates and seamless filing of tax returns.',
      bgColor: '#d8f0e6',
      imgUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e370df6d-262b-4658-a736-6dd451feaf66_dennis-belogorsky-collective-member.webp',
      name: 'Alice Johnson',
      business: 'Tax Solutions',
      img: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/52d30ef4-372c-4508-810c-9e92ca51e3f1_heap_snapshot_large_24dp_000_FILL0_wght400_GRAD0_opsz24.png',
      message: 'Your taxes have been successfully filed!',
      btnText: 'Learn More',
      urlBtn: '/pricing'
    },
    {
      title: 'Formation',
      description: 'Set up your business as an S Corp or upgrade your LLC into one effortlessly.',
      bgColor: '#ffe6e6',
      imgUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b7075e7b-8eed-4dac-8773-e9d3351d70ac_alice-yang-collective-member.jpg',
      name: 'Alice Yang',
      business: 'Business Formation Agency',
      img: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/a86cc18e-263e-4dac-bf8c-047a9a8fe14e_real_estate_agent_24dp_000_FILL0_wght400_GRAD0_opsz24.png',
      message: 'Your LLC formation is complete!',
      btnText: 'Learn More',
      urlBtn: '/pricing'
    },
    {
      title: 'Payroll',
      description: 'Set up payroll for yourself or your employees with ease.',
      bgColor: '#e6d8ff',
      imgUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/6ee24a19-8f3f-44b6-8886-58f30ae71669_yana-gilbuena-babu-collective-member.jpg',
      name: 'Yana Gilbuena',
      business: 'HR Services',
      img: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c2b956c9-bf2b-4c19-b480-c412e13fa43f_developer_guide_24dp_000_FILL0_wght400_GRAD0_opsz24.png',
      message: 'Your payroll system is up and running!',
      btnText: 'Learn More',
      urlBtn: '/pricing'
    },
    {
      title: 'Invoicing*',
      description: 'Send invoices and collect payments directly from your dashboard, hassle-free.',
      bgColor: '#d8f0e6',
      imgUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/276c90a5-e21f-4793-9285-e032803cc4eb_vincent-nguyen-collective-member.jpg',
      name: 'Vincent Nguyen',
      business: 'Freelance Services',
      img: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c0f0b4a4-cd8a-4fc3-8f39-0e0971d76cfa_contract_edit_24dp_000_FILL0_wght400_GRAD0_opsz24.png',
      message: 'Your invoicing is seamless and efficient!',
      btnText: 'Learn More',
      urlBtn: '/pricing'
    },
    {
      title: 'Compliance*',
      description: 'Ensure your business meets all state and federal compliance requirements.',
      bgColor: '#d8f0e6',
      imgUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e370df6d-262b-4658-a736-6dd451feaf66_dennis-belogorsky-collective-member.webp',
      name: 'Dennis Belogorsky',
      business: 'Compliance Solutions',
      img: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/8e223b59-93de-4059-80cb-7a3a577df4db_verified_user_24dp_000_FILL0_wght400_GRAD0_opsz24.png',
      message: 'Your compliance requirements are all set!',
      btnText: 'Learn More',
      urlBtn: '/pricing'
    },
    {
      title: 'Support*',
      description: 'Access our team of licensed accounting and tax professionals whenever needed.',
      bgColor: '#fcbb9380',
      imgUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3f5fa3a4-e80b-4102-b827-1af20f6e5f2d_olivia-nunn-collective-member.jpg',
      name: 'Amelia',
      business: 'Customer Support',
      img: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/c2b956c9-bf2b-4c19-b480-c412e13fa43f_developer_guide_24dp_000_FILL0_wght400_GRAD0_opsz24.png',
      message: 'We are here to help anytime!',
      btnText: 'Learn More',
      urlBtn: '/faq'
    },
    {
      title: 'Community*',
      description: 'Join a vibrant community of like-minded solopreneurs through virtual and in-person events.',
      bgColor: '#e6d8ff',
      imgUrl: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/305804fc-2179-48d3-9b90-cc31db6591ec_bethany-joy-collective-member.jpg',
      name: 'Alice Johnson',
      business: 'Community Management',
      img: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/43b33f6b-a2d1-40e9-ba7a-9f8298d5a576_diversity_3_24dp_000_FILL0_wght400_GRAD0_opsz24.png',
      message: 'Welcome to our solopreneur community!',
      btnText: 'Learn More',
      urlBtn: '/pricing'
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
      const scrollAmount = window.innerWidth < 768 ? 340 : 860; // Adjust scroll for mobile
      sliderElement.scrollLeft -= scrollAmount;
    }
  }

  scrollRight(): void {
    if (this.testimonialSlider) {
      const sliderElement = this.testimonialSlider.nativeElement;
      const scrollAmount = window.innerWidth < 768 ? 340 : 860; // Adjust scroll for mobile
      sliderElement.scrollLeft += scrollAmount;
    }
  }

  testimonials = [
    {
      name: 'Olivia Nunn',
      description: 'Spyder helps me optimize my workload without sacrificing quality',
      backgroundColor: '#ffe6e6',
      profession: 'PR Agency',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3f5fa3a4-e80b-4102-b827-1af20f6e5f2d_olivia-nunn-collective-member.jpg',
      quote: 'Spyder helps me optimize my workload without sacrificing quality',
    },
    {
      name: 'John Doe',
      description: 'Thanks to Spyder, I can focus 100% on my work',
      backgroundColor: '#e6d8ff',
      profession: 'Graphic Designer',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b7075e7b-8eed-4dac-8773-e9d3351d70ac_alice-yang-collective-member.jpg',
      quote: 'The support I receive from Spyderhas been incredible',
    },
    {
      name: 'Jane Smith',
      description: 'Without Spyder, I do not think I would be able to do the work that I love',
      backgroundColor: '#d8f0e6',
      profession: 'Content Creator',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/276c90a5-e21f-4793-9285-e032803cc4eb_vincent-nguyen-collective-member.jpg',
      quote: 'I’m able to focus on my work while Spydertakes care of my taxes',
    },
    {
      name: 'Alice Yang',
      description: 'I love working with Spyderbecause I feel like I am being handheld',
      backgroundColor: '#ffe6e6',
      profession: 'PR Agency',
      image: 'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3f5fa3a4-e80b-4102-b827-1af20f6e5f2d_olivia-nunn-collective-member.jpg',
      quote: 'Spyder helps me optimize my workload without sacrificing quality',
    }
  ];


  images: string[] = [
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/57ec2090-557b-478f-bd18-d4aaca5ee5cf_WhatsAppVideo2025-01-02at6.gif',
    'https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/fbd44177-a1dd-44b9-a638-5875d2130ac8_WhatsAppVideo2025-01-02at6.gif'
  ];

  currentImage: string = this.images[0];
  private imageInterval: any;

  ngOnInit(): void {
    this.setTitleAndMetaTags();
    let currentIndex = 0;
    this.imageInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % this.images.length;
      this.currentImage = this.images[currentIndex];
    }, 5000);

    const div = document.getElementById("section-scroll"); // Replace with your actual selector
    div?.addEventListener('scroll', () => {
      const scrollTop = div.scrollTop; // Pixels scrolled from the top
      const scrollHeight = div.scrollHeight; // Total scrollable content height
      const clientHeight = div.clientHeight; // Visible height of the element
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      if (scrollPercentage < 33) {
        this.activeImageIndex = 0; // First section
      } else if (scrollPercentage >= 33 && scrollPercentage < 66) {
        this.activeImageIndex = 1; // Second section
      } else {
        this.activeImageIndex = 2; // Third section
      }
      console.log(`Scroll Percentage: ${scrollPercentage.toFixed(2)}%`);
    });
  }

  ngOnDestroy(): void {
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  }
}