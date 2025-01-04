import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FaqComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { PricingComponent } from './pricing/pricing.component';
import { FormComponent } from './form/form.component';
import { PressComponent } from './press/press.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full',
},
{
  path: `home`,
  component: HomeComponent
},
{
  path: `about`,
  component: AboutComponent
},
{
  path: `contact`,
  component: ContactComponent
},
{
  path: `testimonial`,
  component: TestimonialComponent
},
{
  path: `testimonial`,
  component: TestimonialComponent
},
{
  path: `pricing`,
  component: PricingComponent
},
{
  path: `press`,
  component: PressComponent
},
{
  path: `form`,
  component: FormComponent
},
{
  path: `faq`,
  component: FaqComponent
},
{
  path: `blog`,
  component: BlogComponent
},
{
  path: `service/:name`,
  component: ServiceComponent
}]
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  }),],
  exports: [RouterModule]
})

export class AppRoutingModule { }