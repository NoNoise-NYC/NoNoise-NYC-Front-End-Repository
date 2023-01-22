import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from './Navbar';

@Component({
  selector: 'app-login',
  template: `
  <app-navbar></app-navbar>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div>
        <label>Email:</label>
        <input type="email" formControlName="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" formControlName="password" required minlength="8" maxlength="15" />
      </div>
      <button type="submit" [disabled]="form.invalid">Submit</button>
    </form>
    <p *ngIf="error">{{ error }}</p>
  `,
  styleUrls: ['../theme.scss']

})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {  
    this.error="",
    this.form = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    verifyPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
  });}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }
    const email = "happy"
    const password = 'sad'

    

    }
  }

