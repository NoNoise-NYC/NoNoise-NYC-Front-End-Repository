import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss']
})
export class NewsLetterComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,   private fb: FormBuilder,) { 
    this.form=this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      verifyPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    })
   this.errorMessage="";
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.http.post('https://pixelstrap.us19.list-manage.com/subscribe/post', {
      email: this.form.value.email
    })
      .pipe(
        catchError(error => {
          this.errorMessage = error.message;
          return throwError(error);
        })
      )
      .subscribe();
  }

}
