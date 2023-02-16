import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  newsFeedPosts: PostModel[] = []; 
  
  @Input()
  post: PostModel = new PostModel('', '', '', '', '', 0);
  constructor() { }

  ngOnInit(): void {
    this.newsFeedPosts = [
      new PostModel('profile1.jpg', 'John Doe', 'January 1, 2022', 'Hello, world!', 'post1.jpg', 10),
      new PostModel('profile2.jpg', 'Jane Doe', 'January 2, 2022', 'Hi, everyone!', 'post2.jpg', 20),
      new PostModel('profile3.jpg', 'Jim Smith', 'January 3, 2022', 'Howdy, partner!', 'post3.jpg', 30),
    ];
  }

}
