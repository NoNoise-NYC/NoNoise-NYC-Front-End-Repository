import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  template: `
  <form [formGroup]="commentForm" (ngSubmit)="submitComment()">
    <label>
      Category:
      <select formControlName="category">
        <option *ngFor="let category of categories" [value]="category">{{category}}</option>
      </select>
    </label>
    <label>
      Title:
      <input type="text" formControlName="title" placeholder="Title" />
    </label>

    <label>
      Content:
      <input type="text" formControlName="content" placeholder="Content" />
    </label>
    <center><div> <button type="submit"> Ask A Question!</button></div></center>
  </form>
  `,
  styles: [`
    .form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    label {
      margin: 10px;
    }
    select, input {
      width: 200px;
      height: 30px;
      border-radius: 5px;
      border: 1px solid gray;
      padding: 5px;
    }
    button {
      width: 120px;
      height: 50px;
      background-color: #1976D2;
      color: black;
      border: none;
      border-radius: 5px;
      margin-top: 10px;
    }
  `]
})
export class CommentComponent implements OnInit {
  categories = ['Behavioral', 'LeetCode 75', 'Technical'];
  commentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {this.commentForm = this.formBuilder.group({
    category: ['', Validators.required],
    title: ['', Validators.required],
    content: ['', Validators.required]
  });}

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  submitComment() {
    const commentData = this.commentForm.value;
    console.log(commentData);
    // your logic to submit the comment here
  }
}
