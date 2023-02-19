import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar color="primary" class="navbar" [ngStyle]="{'width':'100vw', 'margin':'auto', 'background-color': 'black','color': 'white' ,'position':'fixed','font-size':'120px', 'height': '150px'}">
      <img src="./assets/images/newLogo.png" alt="logo" class="logo">
      <span class="spacer"></span>
      <div class="navbar-buttons">
        <button mat-button (click)="navigateToLogin()">Login</button>
        <button mat-button (click)="navigateToSignUp()">Sign Up</button>
      </div>
    </mat-toolbar>
  `,
  styleUrls: ['../theme.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }

  ngOnInit() {}
}
