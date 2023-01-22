import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import './theme.scss';

@Component({
  selector: 'app-login',
  template: `
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
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const email = this.form.get('email').value;
      const password = this.form.get('password').value;

      this.http.get<{ data: any }>(`http://localhost:4005/${email}/${password}`)
        .subscribe(response => {
          if (!response.data) {
            this.error = 'Please add the correct email or password';
            return false;
          } else {
            localStorage.setItem('user', response.data.username);
            localStorage.setItem('user_id', response.data.id);
            localStorage.setItem('email', response.data.email);
            this.router.navigate(['/']);
          }
        });
    }
  }
}
