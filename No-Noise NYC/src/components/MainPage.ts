// MainPageComponent
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  template: `
    <app-navbar></app-navbar>
  
    <app-footer></app-footer>
  `,
  styleUrls: ['../theme.scss']
})
export class MainPageComponent implements OnInit {
  postData: { text: string; imageUrl?: string } = { text: '' };
  posts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPosts();
  }

  handlePostDataChange(postData: { text: string; imageUrl?: string }) {
    this.postData = postData;
    this.createPost();
  }

  // handleComment({ postId, comment }) {
  //   this.posts.forEach((post) => {
  //     if (post.id === postId) {
  //       post.comments.push(comment);
  //     }
  //   });
  // }

  createPost() {
    // You can make a request to a server to create a post
    // using this.postData and add it to the `posts` array

    // For now, I'll just push it to the `posts` array
    this.posts.unshift({
      id: Date.now(),
      user: 'User 1',
      text: this.postData.text,
      imageUrl: this.postData.imageUrl,
      likes: 0,
      comments: [],
      createdAt: new Date(),
    });
  }

  loadPosts() {
    // You can make a request to a server to get the posts
    // and set the response to the `posts` array

    // For now, I'll just set a few sample posts
    this.posts = [
      {
        id: 1,
        user: 'User 1',
        text: 'Sample post 1',
        imageUrl: '',
        likes: 10,
        comments: [
          {
            user: 'User 2',
            text: 'Sample comment 1',
            createdAt: new Date(),
          },
        ],
        createdAt: new Date(),
      },
      {
        id: 2,
        user: 'User 2',
        text: 'Sample post 2',
        imageUrl: '',
        likes: 20,
        comments: [],
        createdAt: new Date(),
      },
    ];
  
  }
  
}

