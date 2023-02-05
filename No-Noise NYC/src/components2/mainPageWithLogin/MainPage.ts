import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NavbarComponent} from './components/Navbar'
import{FooterComponent} from './components/Footer'
import {PostFeedComponent} from './newPostPage';

import {InputFieldComponent} from './InputField';


@Component({
  selector: 'app-main-page',
  template: `
    <app-navbar></app-navbar>
    <app-input-field [isClicked]="isClicked" (setIsClicked)="setIsClicked($event)" (loadPost)="loadPost()"></app-input-field>
    <div [ngStyle]="{ 'background-color': '#0D2129' }">
      <app-post-feed [isClicked]="isClicked" [questions]="questions" [likes]="likes" (setQuestions)="setQuestions($event)" (setLikes)="setLikes($event)" (loadPost)="loadPost()"></app-post-feed>
    </div>
  `
})
export class MainPageComponent implements OnInit {
  isClicked = false;
  questions = [];
  likes = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadPost();
  }

  loadPost() {
    this.http.get('http://localhost:4005/post')
      .subscribe(json => {
        this.questions = json;
        this.likes = this.questions.likes;
      });
  }

  setIsClicked(isClicked: boolean) {
    this.isClicked = isClicked;
  }

  setQuestions(questions: any) {
    this.questions = questions;
  }

  setLikes(likes: number) {
    this.likes = likes;
  }
}
