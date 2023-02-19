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
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';

import { environment } from '../environments/environment';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';



import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/Navbar';
import { SignupComponent } from 'src/components/Signup';
import { LoginComponent } from 'src/components/Login';
import { FooterComponent } from 'src/components/Footer';
import { MatCardModule} from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { rootRouterConfig } from './app.routes';

import { BlogComponent } from './blog/blog.component';
import {MainPageComponent} from 'src/components/MainPage'
// import { PostFeedComponent } from 'src/components/newPostPage';
import { InputFieldComponent } from 'src/components/InputField';
import { NewCommentModalComponent } from 'src/components/newCommentModal';
import { CommentComponent } from 'src/components/comment';
import { CommentModalComponent } from 'src/components/commentModal';
import { CommentListComponent } from 'src/components2/commentList';
import { BasicModalComponent } from 'src/components/modal';
// import { HeatmapComponent } from 'src/components/noiseComplaint';
import { PostFeedComponent } from './pages copy/post-feed/post-feed.component';
import { CreatePostComponent } from './tools/create-post/create-post.component';
import { PostComponent } from './tools/post/post.component';
import { ReplyComponent } from './tools/reply/reply.component';

// import { HeatmapComponent } from 'src/components/noiseComplaint';
import { SeverityMeterComponent } from 'src/components/severitymeter';

import { AppRoutingModule } from './app-routing';
import { map } from 'leaflet';


const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {path:'home',component: SeverityMeterComponent},
  {path:'social',component: PostFeedComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    BlogComponent,
    PostFeedComponent,
    CreatePostComponent,
    PostComponent,
    ReplyComponent,
    MainPageComponent,
    CommentComponent,
    NewCommentModalComponent,
    PostFeedComponent,
    SeverityMeterComponent,
    InputFieldComponent,
    CommentListComponent,
    CommentModalComponent,
    BasicModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
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
  schemas: [NO_ERRORS_SCHEMA],

  bootstrap: [AppComponent  ],
  entryComponents:[SignupComponent, LoginComponent]
})
export class AppModule { 
  constructor(){
    FirebaseTSApp.init(environment.firebase);
  }
}