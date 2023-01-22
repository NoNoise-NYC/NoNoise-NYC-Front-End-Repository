import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar style="display: flex; margin: 20px; height: 70px; position: relative; top: 0px;">
      <img src="./logo.png" alt='1' id='img' style="width: auto; margin-left: 5px;"/>
      <span style="flex-grow: 1;"></span>
      <button mat-button color="primary" (click)="navigateToLogin()">Login</button>
      <button mat-button color="primary" (click)="navigateToSignUp()">Sign Up</button>
    </mat-toolbar>
  `,
  styles: [`
    #img {
      width: auto;
      margin-left: 5px;
    }
  `]
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
