import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { CreatePostComponent } from 'src/app/tools/create-post/create-post.component';


interface Post {
  comment: string;
  creatorId: string;
  imageUrl?: string;
  postId: string;
}

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css']
})
export class PostFeedComponent implements OnInit {
  posts: PostData [] = [];

  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {
    this.getPosts();
  }

  onCreatePostClick(){
    this.dialog.open(CreatePostComponent);
  }

  getPosts(){
    // simulate getting posts from server
    const mockPosts: Post[] = [
      {
        comment: 'First post',
        creatorId: 'user1',
        imageUrl: 'https://picsum.photos/id/1011/200/300',
        postId: 'post1'
      },
      {
        comment: 'Second post',
        creatorId: 'user2',
        postId: 'post2'
      },
      {
        comment: 'Third post',
        creatorId: 'user3',
        imageUrl: 'https://picsum.photos/id/1025/200/300',
        postId: 'post3'
      },
    ];

    this.posts = mockPosts;
  }
}


export interface PostData {
  comment: string;
  creatorId: string;
  imageUrl?: string;
  postId: string;
}
