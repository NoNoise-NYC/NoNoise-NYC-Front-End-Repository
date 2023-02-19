import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  template: `

<app-navbar></app-navbar>

  <button  class="btn-animated"   style = " margin-left:100px ;z-index: 1; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);" (click)="openModal()">
  <div class="btn-layer btn-layer-1"></div>
  <div class="btn-layer btn-layer-2"></div>
  <div class="btn-layer btn-layer-3"></div>
  Login
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
    top: 350px;
    left: 140px;
  }
  .btn:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:-1;
    position: absolute;
    top: calc(100px + 50vh - 50%);
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 300px;
    background-color: white;
    border: 1px solid black;
  }
</style>

<div class="section-1">

<h1 id="intro">NoNoise NYC is dedicated to promoting a quieter world, one community at a time. </h1>
<img id="img1" mat-card-image  src="./assets/images/noNooise.png">
</div>
<div>
  <ng-template id="modal-content" #content let-modal>
    <div style="position: absolute; top: 120px; height: 600px; left: 500px; z-index:1;display: flex; align-items: center; justify-content: center;">
      <div class="modal-content" style="position: relative; background-color: white; border-radius: 4px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); padding: 40px; width: 80%; max-width: 500px;">
        <div class="modal-header">
          <h4 >Log In</h4>
          <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      <form  [formGroup]="loginform" (ngSubmit)="onSubmit()">
  <mat-form-field>
    <mat-label>Email</mat-label>
    <input matInput formControlName="email" required>
  </mat-form-field>
  <mat-form-field>
    <mat-label>Password</mat-label>
    <input matInput formControlName="password" type="password" required>
  </mat-form-field>

  <button mat-raised-button color="primary" type="submit" [disabled]="!loginform.valid">Log In</button>
</form>  
      </div>
    </div>
  </ng-template>
</div>


<div class="section-2">
<mat-card class="mat-elevation-z4">
        <mat-card-header>
        </mat-card-header>
        <div class="slideshow-container">
          <div class="mySlides">
            <div class="content card card-4">
              <img mat-card-image id="imag" src="./assets/images/bronx.jfif">
              <div class="card-body">
          <h5 class="card-title">Noise Pollution disrupts Bronx residents.</h5>
          <p class="card-text">Learn more about the effects of noise pollution on the residents of the Bronx.</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary" routerLink="/articles/bronx">Read more</button>
        </div>
      </div>
    </div>

          <div class="mySlides">
            <div class="content card card-5">
              <img mat-card-image id="imag" src="./assets/images/airplane.jfif">
              <div class="card-body">
          <h5 class="card-title">What you need to know about airplane noise.</h5>
          <p class="card-text">Discover the facts about airplane noise and how it affects you.</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary" routerLink="/articles/airplane">Read more</button>
        </div>
      </div>
    </div>
          <div class="mySlides">
            <div class="content card card-6">
              <img mat-card-image id="imag" src="./assets/images/earplugs.jfif">
              <mat-card-content>
                <h4>Barking dogs are the second highest noise complaint in NYC</h4>
                <div class="card-body">
          <h5 class="card-title">Find the perfect earplugs for you.</h5>
          <p class="card-text">Explore our selection of earplugs and find the right ones for your needs.</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary" routerLink="/shop">Shop now</button>
        </div>
          <a class="prev" (click)="plusSlides(-1)">&#10094;</a>
          <a class="next" (click)="plusSlides(1)">&#10095;</a>
          <div style="text-align:center">
            <span class="dot" (click)="currentSlide(1)"></span>
            <span class="dot" (click)="currentSlide(2)"></span>
            <span class="dot" (click)="currentSlide(3)"></span>
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
      .modal-open {
  filter: blur(4px);
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
    width: 300px;
    height: 400px;
    top:200px;
    position: relative;
    transition: transform 0.3s;
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


export class LoginComponent implements OnInit {
  loginform: FormGroup;
  error: string;

  @ViewChild('content', { static: false }) content: ElementRef;

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

  showModal = false;

  closeModal() {
    this.showModal = false;
      document.body.classList.remove('modal-open');
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private modalService: NgbModal
  ) {

    this.content = new ElementRef(null),
      this.error = "",
      this.loginform = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
      })
  }


  openModal() {
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' });
    this.showModal = true
     document.body.classList.add('modal-open');

  }

  ngOnInit(): void {


    this.content = this.content;
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }
  onSubmit() {
    const email = this.loginform.get('email')?.value;
    const password = this.loginform.get('password')?.value;
    this.http.get('http://localhost:4005/users').subscribe((data: any) => {
      const foundUser = data.find((user: { email: string, password: string }) => {
        return user.email === email && user.password === password;
      });
    });
    
        this.router.navigate(['/home']);
      
  
  }
}  