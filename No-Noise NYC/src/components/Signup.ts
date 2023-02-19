import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from './Navbar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signup',
  template: `


<app-navbar></app-navbar>

<button  class="btn-animated"  style=" margin-left:100px ; z-index: 1;  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);" (click)="openModal()">
<div class="btn-layer btn-layer-1"></div>
<div class="btn-layer btn-layer-2"></div>
<div class="btn-layer btn-layer-3"></div>
Sign Up
</button>

<style>
.btn-animated {
position: relative;
width: 80px;
height: 80px;
border-radius: 40px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
overflow: hidden;
cursor: pointer;
}

.btn-layer {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border-radius: 40px;
animation: pulse 2s infinite;
}

.btn-layer-1 {
background-color: rgba(0, 0, 255, 0.1);
animation-delay: 0s;
}

.btn-layer-2 {
background-color: rgba(0, 0, 255, 0.3);
animation-delay: 0.5s;
}

.btn-layer-3 {
background-color: rgba(0, 0, 255, 0.5);
animation-delay: 1s;
}

@keyframes pulse {
0% {
  transform: scale(1);
}
50% {
  transform: scale(1.2);
}
100% {
  transform: scale(1);
}
}

.fixed-top {
  position: absolute;
  top: 2350px;
  left: 140px;
}
.btn:hover {
  background-color: white;
  color: black;
  cursor: pointer;
}
</style>
<div class="section-1">

<h1 id="intro">NoNoise NYC is dedicated to promoting a quieter world, one community at a time. </h1>
<img id="img1" mat-card-image  src="./assets/images/noNooise.png">
</div>
<div>
  <ng-template id="modal-content" #content let-modal>
    <div style="position: absolute; top: 40px; height: 800px; left: 500px;  display: flex; align-items: center; justify-content: center;">
      <div class="modal-content" style="position: relative;background-color: white; border-radius: 4px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); padding: 20px; width: 80%; max-width: 500px;">
        <div class="modal-header">
          <h4 >Sign Up</h4>
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
      </div>
    </div>
  </ng-template>
</div>

<div class="section-3">
      <mat-card class="mat-elevation-z4">
        <mat-card-header>
        </mat-card-header>
        <div class="slideshow-container">
          <div class="mySlides">
            <div class="content card card-4">
              <img mat-card-image id="imag" src="./assets/images/partying2.png">
              <mat-card-content>
                <h4>Partying is the third most popular noise complaint in NYC</h4>
              </mat-card-content>
              <mat-card-actions>
                <button class="card-button" mat-button>
                  <centre>
                    <h1 id="title">Join Us</h1>
                  </centre>
                </button>
              </mat-card-actions>
            </div>
          </div>
          <div class="mySlides">
            <div class="content card card-5">
              <img mat-card-image id="imag" src="./assets/images/construction2.png">
              <mat-card-content>
                <h4>Construction is the Number 1 noise complaint in NYC</h4>
              </mat-card-content>
              <mat-card-actions>
                <button class="card-button" mat-button>
                  <centre>
                    <h1 id="title">Join Us</h1>
                  </centre>
                </button>
              </mat-card-actions>
            </div>
          </div>
          <div class="mySlides">
            <div class="content card card-6">
              <img mat-card-image id="imag" src="./assets/images/barkingdog2.png">
              <mat-card-content>
                <h4>Barking dogs are the second highest noise complaint in NYC</h4>
              </mat-card-content>
              <mat-card-actions>
                <button class="card-button" mat-button>
                  <centre>
                    <h1 id="title">Join Us</h1>
                  </centre>
                </button>
              </mat-card-actions>
            </div>
          </div>
          <a class="prev" (click)="plusSlides(-1)">&#10094;</a>
          <a class="next" (click)="plusSlides(1)">&#10095;</a>
          <div style="text-align:center">
            <span class="dot" (click)="currentSlide(1)"></span>
            <span class="dot" (click)="currentSlide(2)"></span>
            <span class="dot" (click)="currentSlide(3)"></span>
          </div>
        </div>
      </mat-card>
    </div>
<app-footer></app-footer>


`
  , styles: [`
 .modal-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      position:absolute;
      left:500px;
  top:150px;
    }
    .modal-content {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   
      position: absolute;
      top: calc(100px + 50vh - 50%);
      left: 50%;
      transform: translate(-50%, -50%);
      width: 500px;
      height: 300px;
      background-color: white;
      border: 1px solid black;
    }
    #modalcontent{
      top:250px;
      left:500px;
      position:relative;
      position: absolute;
      top: calc(100px + 50vh - 50%);
      left: 50%;
      transform: translate(-50%, -50%);
      width: 500px;
      height: 300px;
      background-color: white;
      border: 1px solid black;
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
      position: absolute;
        top: calc(100px + 50vh - 50%);
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        height: 300px;
        background-color: white;
        border: 1px solid black;
}

.card-container {
  perspective: 1000px;
}

.card {
  top:200px;
  width: 300px;
  height: 400px;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border: 5px solid #000000;
  background-color:#E7EAF4
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

  slideIndex = 1;

  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  

  showSlides(n: number) {

    let i;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
    }
    

    
  startSlideShow() {
    setInterval(this.showSlides, 5000);
  }
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
    this.content = new ElementRef(null),
      this.signupForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
        verifyPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
      });
  }

  openModal() {
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' });
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
      });
    });
        this.router.navigate(['/login']);

  }
}