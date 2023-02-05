import { Component, OnInit, Input } from '@angular/core';

@Component({
selector: 'input-field',
template: `

  <div class="inputField">
    <input class="titleField" placeholder="Title" [(ngModel)]="title"></input>
    <br></br>
    <select class="titleField" [(ngModel)]="questionType">
      <option value="Technical">Technical</option>
      <option value="Behavorial">Behavioral</option>
      <option value="LeetCode 75">LeetCode 75</option>
    </select>
    <textarea class="detailsField" placeholder="What are the details of your problem?" [(ngModel)]="description"></textarea>
    <br></br>
    <button class="postButton" (click)="createPost()">Post!</button>
  </div>
  `,
  styles: [`
    .inputField {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }
    .titleField {
        width: 50%;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #333;
        padding: 5px;
        margin-bottom: 10px;
      }
      
      .detailsField {
        width: 50%;
        height: 150px;
        border-radius: 5px;
        border: 1px solid #333;
        padding: 5px;
        margin-bottom: 10px;
      }
      
      .postButton {
        background-color: #333;
        color: #fff;
        height: 30px;
        width: 80px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
      }
      `]
    })
    export class InputFieldComponent implements OnInit {
    @Input() loadPost: any;
    
    title: string;
    description: string;
    questionType: string = 'Technical';
    
    constructor() { }
    
    ngOnInit() {
    }
    
    createPost() {
    fetch("http://localhost:4005/addPost", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    username: localStorage.getItem('user'),
    post_title: this.title,
    post_description: this.description,
    post_type: this.questionType
    }),
    }).then(res => {
    this.loadPost();
    });
    }
    }
    
    
    
          