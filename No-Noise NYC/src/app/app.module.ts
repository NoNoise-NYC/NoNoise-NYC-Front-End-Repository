import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { OwlModule } from 'ngx-owl-carousel';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { PostComponent } from './news-feed/post-feed/post.component';
import { MAPBOX_ACCESS_TOKEN } from 'src/components/noiseComplaint';

import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/Navbar';
import { SignupComponent } from 'src/components/Signup';
import { LoginComponent } from 'src/components/Login';
import { FooterComponent } from 'src/components/Footer';
import { MatCardModule} from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { rootRouterConfig } from './app.routes';
import { HeatmapComponent } from 'src/components/heatMap';
import { BlogComponent } from './blog/blog.component';
import {MainPageComponent} from 'src/components/MainPage'
import { PostFeedComponent } from 'src/components/newPostPage';
import { InputFieldComponent } from 'src/components/InputField';
import { NewCommentModalComponent } from 'src/components/newCommentModal';
import { CommentComponent } from 'src/components/comment';
import { CommentModalComponent } from 'src/components/commentModal';
import { CommentListComponent } from 'src/components2/commentList';
import { BasicModalComponent } from 'src/components/modal';


import { NoiseComplaintsMapComponent } from 'src/components/noiseComplaint';
import { SeverityMeterComponent } from 'src/components/severitymeter';

import { AppRoutingModule } from './app-routing';
import { map } from 'leaflet';


const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {path:'home',component: MainPageComponent},
  {path:'main',component: NoiseComplaintsMapComponent},
  {path:'social',component: NewsFeedComponent},
  {path:'heat',component: HeatmapComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    BlogComponent,
    HeatmapComponent,
    NoiseComplaintsMapComponent,
    MainPageComponent,
    CommentComponent,
    NewCommentModalComponent,
    PostFeedComponent,
    SeverityMeterComponent,
    NewsFeedComponent,
    PostComponent,

    InputFieldComponent,
    CommentListComponent,
    CommentModalComponent,
    BasicModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  
    NgbModule,
    OwlModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatButtonModule,
    NgxPageScrollCoreModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'}),
    CommonModule
  ],
  providers: [
    { provide: MAPBOX_ACCESS_TOKEN, useValue: 'sk.eyJ1IjoibWFyY3dheW43IiwiYSI6ImNsZTBuOHppbDByMG8zb284OXMzaDBxb3kifQ.81d5MvNofyYW0ZCtoajk_A' }
  ],
  schemas: [NO_ERRORS_SCHEMA],

  bootstrap: [AppComponent  ],
  entryComponents:[SignupComponent, LoginComponent]
})
export class AppModule { }
