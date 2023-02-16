import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from './Navbar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
selector: 'app-signup',
template: `
<<<<<<< HEAD
<app-navbar></app-navbar>
=======


<app-navbar></app-navbar>

>>>>>>> 56f756a4b0d913948fba2906268d20b3e2ecc173
<button class="btn btn-outline-primary fixed-top" style="background-color: white; color: blue; padding: 35px 30px; z-index: 1; border-radius: 20px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);" (click)="openModal()">
  Sign Up
</button>

<style>
.fixed-top {
  position: absolute;
  top: 270px;
  left: 140px;
}
  .btn:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
</style>
<<<<<<< HEAD
<div  ><ng-template #content let-modal >
<ng-template class="modal-header" >
=======

<ng-template #content let-modal  >
>>>>>>> 56f756a4b0d913948fba2906268d20b3e2ecc173
        <h4 class="modal-title" id="modal-basic-title">Sign Up</h4>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
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
</ng-template>


<div class="section-1">

<h1 id="intro">NoNoise NYC is dedicated to promoting a quieter world, one community at a time. </h1>
<img id="img1" mat-card-image src="./assets/images/noNoisee.jfif">
</div>
<div class="section-2">

<div class="content" class="card card-3">
  <mat-card class="mat-elevation-z4">
    <mat-card-header>
      <div class="card-front">
        <mat-card-title>
          <h1>Noise Pollution disrupts bronx residents.</h1>
        </mat-card-title>
      </div>

    </mat-card-header>
    <img mat-card-image src="./assets/images/bronx.jfif">
    <mat-card-content>
      <div class="card-back">
        hey
      </div>
    </mat-card-content>
    <mat-card-actions>
      <mat-card-title>
        <h1>Noise Pollution disrupts bronx residents.</h1>
      </mat-card-title>

    </mat-card-actions>
  </mat-card>
</div>
<div class="content" class="card card-2">
  <mat-card class="mat-elevation-z4">
    <mat-card-header>
      <div class="card-front"> 
      </div>
    </mat-card-header>
    <img mat-card-image src="./assets/images/duality.jfif">
    <mat-card-content>
      <div class="card-back">
        me again
      </div>
    </mat-card-content>
    <mat-card-actions>
      <mat-card-title>
        <h1>Noise Pollution usually comes with other forms of pollution</h1>
      </mat-card-title>
    </mat-card-actions>
  </mat-card>
</div>
<div class="content" class="card card-1">
  <mat-card class="mat-elevation-z4">
    <mat-card-header>
      <div class="card-front"></div>
    </mat-card-header>
    <img mat-card-image src="./assets/images/duality.jfif">
    <mat-card-content>
      <div class="card-back">
        sup
      </div>
    </mat-card-content>
    <mat-card-actions>
     
        <mat-card-title>
          <h1>Noise Pollution is more pervasive in low income neighborhoods.</h1>
        </mat-card-title>
      

    </mat-card-actions>
  </mat-card>
</div>

</div>
<div class="section-3">

<div class="content" class="card card-4">
  <mat-card class="mat-elevation-z4">
    <mat-card-header>

    </mat-card-header>
    <img mat-card-image id="imag" src="./assets/images/partying2.png">
    <mat-card-content>
      <h4>
        Partying is the third most popular noise complaint in NYC
      </h4>
    </mat-card-content>
    <mat-card-actions>
      <button class="card-button" mat-button>
        <centre>
          <h1 id="title">Why Join Us?</h1>
        </centre>
      </button>

    </mat-card-actions>
  </mat-card>
</div>

<div class="content" class="card card-5">
  <mat-card class="mat-elevation-z4">
    <mat-card-header>

    </mat-card-header>
    <img mat-card-image id="imag" src="./assets/images/construction2.png">
    <mat-card-content>
      <h4>
        Construction is the Number 1 noise complaint in NYC
      </h4>
    </mat-card-content>
    <mat-card-actions>
      <button class=" card-button" mat-button>
        <centre>
          <h1 id="title">Why Join Us?</h1>
        </centre>
      </button>

    </mat-card-actions>
  </mat-card>
</div>

<div class="content" class="card card-6">
  <mat-card class="mat-elevation-z4">
    <mat-card-header>

    </mat-card-header>
    <img mat-card-image id="imag" src="./assets/images/barkingdog2.png">
    <mat-card-content>
      <h4>
        Barking dogs are the second highest noise complaint in NYC
      </h4>
    </mat-card-content>
    <mat-card-actions>
      <button class=" card-button" mat-button>
        <centre>
          <h1 id="title">Why Join Us?</h1>
        </centre>
      </button>

    </mat-card-actions>
  </mat-card>
</div>

</div>


`
<<<<<<< HEAD

,


styles: [`
.content{
  margin:20px;
  margin-top:120px;
  width:400px;
   position:absolute;
   left:500px;
   top:250px;
   z-index:1;
   background-color:  white;
   color: blue;}

  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    position:relative;
    left:500px;
=======
, styles: [`
.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position:absolute;
  left:500px;
>>>>>>> 56f756a4b0d913948fba2906268d20b3e2ecc173
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

button {
  margin-top: 1rem;
}
<style>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card-container {
  perspective: 1000px;
}

.card {
  width: 300px;
  height: 400px;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border: 5px solid #000000;
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;

}

.card-back {
  background-color: #7f1111;
  color: #FFFFFF;
  transform: rotateY(180deg);

}

.card-button {
  width: 100%;
  height: 50px;
  background-color: #FFFFFF;
  color: #000000;
  text-align: center;
  line-height: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}

.card-button:hover {
  background-color: #000000;
  color: #FFFFFF;
  cursor: pointer;
}

.flipped {
transform: rotateY(180deg);
}

.card:hover {
cursor: pointer;
transform: rotateY(180deg);
}
.mat-card {
  width: 70%;
  border: 5px solid #ddd;
  margin: 40px;
  box-shadow: 2px 2px 4px #ddd;
  transition: all 0.3s ease-in-out;
}

.mat-card:hover {
  transform: translateY(-10px);
  box-shadow: 2px 12px 20px #ddd;
}

.mat-card-header {
  background-color: #ddd;
  padding: 10px;
}

.mat-card-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.mat-card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.mat-card-content {
  padding: 20px;
}

.mat-card-actions {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

.mat-button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

.mat-button:hover {
  background-color: #fff;
  color: #333;
  cursor: pointer;
}
.card-1 .card-back,
.card-2 .card-back,
.card-3 .card-back {
background-color: white;
color: black;
font-weight: bold;
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
          this.router.navigate(['/login']);
        });
      });
    }
  }