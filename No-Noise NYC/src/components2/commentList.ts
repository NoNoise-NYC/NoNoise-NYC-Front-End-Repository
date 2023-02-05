import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comment-list',
  template: `
    <ul *ngFor="let comment of data">
      <li class="py-4">
        {{ comment.comment_description }}
        <br>
        - {{ comment.username }}
      </li>
    </ul>
  `
})
export class CommentListComponent implements OnInit {
  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`http://localhost:4005/comments/${this.postId}`)
      .subscribe(data => {
        this.data = data;
      });
  }
}







