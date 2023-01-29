import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from './Navbar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
selector: 'app-signup',
template: `

<div [ngStyle]="{'width':'100px', 'background-color': 'red','color': 'white'}"></div>
<ng-template #content let-modal>
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

  <div class="modal-header">
    <h4 class="modal-title" id="modal-basic-title">Modal Title</h4>
    <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Modal Content</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
  </div>
</ng-template>`

,
styles: [`
  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 0.5rem;
  }

  input {
    margin-bottom: 1rem;
    padding: 0.5rem;
  }

  button {
    margin-top: 1rem;
  }
`]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  content:null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { 
    this.content=null,
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      verifyPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }

  openModal() {
    this.modalService.open(this.content,{ ariaLabelledBy: 'modal-basic-title' });
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