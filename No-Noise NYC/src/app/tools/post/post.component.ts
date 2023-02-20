import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReplyComponent } from '../reply/reply.component';

interface PostData {
  id: string;
  creatorId: string;
  content: string;
  timestamp: Date;
}

interface UserData {
  id: string;
  username: string;
  description: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postData: PostData = {
    id: '',
    creatorId: '',
    content: '',
    timestamp: new Date(),
  };
  creatorName: string = '';
  creatorDescription: string = '';

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCreatorInfo();
  }

  onReplyClick(){
    this.dialog.open(ReplyComponent, {data: this.postData.id});
  }

  getCreatorInfo(){
    this.http.get<UserData>(`https://localhost:4005/users/${this.postData.creatorId}`)
      .subscribe(user => {
        this.creatorName = user.username;
        this.creatorDescription = user.description;
      });
  }

  createPost(postData: PostData): Observable<PostData> {
    return this.http.post<PostData>('https://localhost:4005/posts', postData);
  }

  readPost(id: string): Observable<PostData> {
    return this.http.get<PostData>(`https://localhost:4005/posts/${id}`);
  }

  updatePost(postData: PostData): Observable<PostData> {
    return this.http.put<PostData>(`https://localhost:4005/posts/${postData.id}`, postData);
  }

  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(`https://localhost:4005/posts/${id}`);
  }
}
