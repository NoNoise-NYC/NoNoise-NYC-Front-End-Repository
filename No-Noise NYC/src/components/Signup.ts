import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from './Navbar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
selector: 'app-signup',
template: `

<button class="btn btn-outline-primary fixed-top" style="background-color: white; color: blue; padding: 35px 30px; z-index: 1; border-radius: 20px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);" (click)="openModal()">
  Sign Up
</button>

<style>
.fixed-top {
  position: absolute;
  top: 410px;
  left: 140px;
}
  .btn:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
</style>
<div  [ngStyle]="{'margin':'20px','margin-top':'120px','width':'400px', 'position':'absolute','left':'500px','top':'250px','z-index':'1','background-color': ' white','color': 'blue'}"><ng-template #content let-modal >
<div class="modal-header" >
        <h4 class="modal-title" id="modal-basic-title">Sign Up</h4>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
<form  [formGroup]="signupForm" (ngSubmit)="onSubmit()">
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

  <div class="modal-footer">
    <button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
  </div>
</ng-template></div>

`

,
styles: [`
  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    position:absolute;
    left:500px;
top:50px;
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
  .modal-content {
    background-color: white;
    width: 200px;
    height: 200px;
    margin: 50px auto;
    padding: 20px;
  }

  button {
    margin-top: 1rem;
  }
`],
styleUrls: ['../theme.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  @ViewChild('content', { static: false }) content: ElementRef;

  showModal = false;

  closeModal() {
    this.showModal = false;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { 
    this.content=new ElementRef(null),
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      verifyPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }

  openModal() {
    this.modalService.open(this.content,{ ariaLabelledBy: 'modal-basic-title' });
    this.showModal = true;
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