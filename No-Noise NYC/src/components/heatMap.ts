

import { Component, OnInit ,TemplateRef,ViewChild ,ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from './Navbar';


@Component({
  selector: 'app-heat-map',
  template: `
    <div id="map" style="height: 500px; width: 100%">HI</div>
  `,
  styles: [`
    #map {
      height: 100%;
      width: 100%;
    }
  `]
})
export class HeatMapComponent {
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
    private http: HttpClient
 
  ) {  
    
   this.content=new ElementRef(null),
   this.error="",
    this.form = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    verifyPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
  })}


  
  ngOnInit(): void {
    this.content = this.content;
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      this.router.navigate(['/heatmap']);
    }
    const email = "happy"
    const password = 'sad'

    

    }
  }
