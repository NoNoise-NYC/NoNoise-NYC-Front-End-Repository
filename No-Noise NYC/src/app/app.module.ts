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

import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/Navbar';
import { SignupComponent } from 'src/components/Signup';
import { LoginComponent } from 'src/components/Login';
import { FooterComponent } from 'src/components/Footer';
import { MatCardModule} from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { rootRouterConfig } from './app.routes';
import { HeatMapComponent } from 'src/components/heatMap';
import { BlogComponent } from './blog/blog.component';
import { SlideshowComponent } from 'src/components/slideshowComponent';


import { AppRoutingModule } from './app-routing';


const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    BlogComponent,
    HeatMapComponent,
    SlideshowComponent
   
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
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent  ],
  entryComponents:[SignupComponent, LoginComponent]
})
export class AppModule { }
