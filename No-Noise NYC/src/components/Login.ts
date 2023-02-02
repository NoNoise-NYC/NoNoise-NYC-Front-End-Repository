import { Component, OnInit ,TemplateRef,ViewChild ,ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from './Navbar';


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  template: `

  <button class="btn btn-outline-primary fixed-top" style="background-color: black; color: white; padding: 40px 50px; z-index: 1; border-radius: 20px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);" (click)="openModal()">
  Login
</button>

<style>
  .fixed-top {
    position: absolute;
    top: 250px;
    right: 40px;
  }
  .btn:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
</style>
    <div class="modal-overlay" *ngIf="showModal"></div>
    <ng-template let-modal #content [ngStyle]="{'margin':'20px','margin-top':'120px','width':'400px', 'position':'absolute','left':'500px','top':'150px','z-index':'1','background-color': 'white','color': 'blue'}">
      <div class="modal-header" >
        <h4 class="modal-title" id="modal-basic-title">Login</h4>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
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
      </div>
    </ng-template>
  `,
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


export class LoginComponent implements OnInit {
  form: FormGroup;
  error: string;

  @ViewChild('content', { static: false }) content: ElementRef;

  showModal = false;


  

  closeModal() {
    this.showModal = false;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private modalService: NgbModal
  ) {  
    
   this.content=new ElementRef(null),
   this.error="",
    this.form = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    verifyPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
  })}


  openModal() {
    this.modalService.open(this.content,{ ariaLabelledBy: 'modal-basic-title' });
    
    this.showModal = true;

  }

  ngOnInit(): void {
    this.content = this.content;
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

