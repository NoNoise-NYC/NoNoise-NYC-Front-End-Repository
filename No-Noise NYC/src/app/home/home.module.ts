import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';

import { HomeComponent } from './home.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';

import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { TeamComponent } from './team/team.component';
import { PriceComponent } from './price/price.component';
import { BlogComponent } from './blog/blog.component';

import { FaqComponent } from './faq/faq.component';
import { DownloadComponent } from './download/download.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    OwlModule
  ],
  declarations: [
    HomeComponent,
    IntroComponent,
    AboutComponent,
    FeatureComponent,
   
    HowItWorkComponent,
    TeamComponent,
    PriceComponent,
    BlogComponent,
   
    FaqComponent,
    DownloadComponent
  ]
})
export class HomeModule { }
