import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar color="primary" class="navbar" [ngStyle]="{'width':'100vw', 'background-color': 'black','color': 'white', 'height': '80px'}">
      <img src="logo.png.gif" alt="logo" class="logo">
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
