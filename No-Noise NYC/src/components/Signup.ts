import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from './Navbar';

@Component({
  selector: 'app-signup',
  template: `
    <app-navbar></app-navbar>
    <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
      <mat-form-field>
        <mat-label>Username</mat-label>
        <input matInput formControlName="username" required>
      </mat-form-field>
      <mat-form-field>
        <mat-label>Email</mat-label>
        <input matInput formControlName="email" required>
      </mat-form-field>
      <mat-form-field>
        <mat-label>Password</mat-label>
        <input matInput formControlName="password" type="password" required>
      </mat-form-field>
      <mat-form-field>
        <mat-label>Verify Password</mat-label>
        <input matInput formControlName="verifyPassword" type="password" required>
      </mat-form-field>
      <button mat-raised-button color="primary" type="submit" [disabled]="!signupForm.valid">Sign Up</button>
    </form>
  `,
  styleUrls: ['../theme.scss'],
  styles: [`
    mat-form-field {
      width: 100%;
 
    }
  `]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { 
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      verifyPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }


  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email
      ]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      verifyPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
      });
      }
      
      onSubmit() {
      const email = this.signupForm.get('email')?.value;
      const password = this.signupForm.get('password')?.value;
      const username = this.signupForm.get('username')?.value;
      const verifyPassword = this.signupForm.get('verifyPassword')?.value;
      if (password !== verifyPassword) {
        alert('Passwords do not match');
        return;
      }
      
      this.http.post('http://localhost:4005/new_user', { username, email, password }).subscribe(data => {
        this.http.get('http://localhost:4005/users').subscribe(async (data: any) => {
          let emailChecker = await data.findIndex((ele: any) => ele.email === email);
          let usernameChecker = await data.findIndex((ele: any) => ele.username === username);
          if (emailChecker !== -1) {
            alert('Email already exists');
          } else if (usernameChecker !== -1) {
            alert('Username already exists');
          } else {
            this.router.navigate(['/login']);
          }
        });
      });
    }
  }