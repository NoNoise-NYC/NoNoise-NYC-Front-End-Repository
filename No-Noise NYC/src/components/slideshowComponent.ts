import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from './Navbar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slideshow',
  template: `
    <div class="section-3">
      <div class="content" class="card" *ngFor="let item of items">
        <mat-card class="mat-elevation-4">
          <mat-card-header>
            <mat-card-title>Why Join Us?</mat-card-title>
          </mat-card-header>
          <img mat-card-image [src]="item.image">
          <mat-card-content>
            <h4>
             {{ item.text }}
            </h4>
          </mat-card-content>
          <mat-card-actions>
            <button class="card-button" mat-button>Learn More</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .content {
      display: inline-block;
      height:300px;
    }
  `]
})
export class SlideshowComponent {
  items = [
    {
      image: './assets/images/partying2.png',
      text: 'Partying is the third most popular noise complaint in NYC'
    },
    {
      image: './assets/images/construction2.png',
      text: 'Construction is the Number 1 noise complaint in NYC'
    },
    {
      image: './assets/images/barkingdog2.png',
      text: 'Barking dogs are the second highest noise complaint in NYC'
    }
  ];
}
