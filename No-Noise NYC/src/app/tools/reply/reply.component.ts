import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { timestamp } from 'rxjs/internal/operators/timestamp';

interface CommentDocument {
  text: string;
  timestamp: number;
  creatorId: string;
  creatorName: string;
}

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  @Input() postId: string = '';

  public comments: CommentDocument[] = [];

  public newCommentText: string = '';

  public currentUser: { id: string; name: string; } = { id: '', name: '' };

  public isCommentEditMode: boolean = false;

  public editedCommentId: string = '';

  public editedCommentText: string = '';

  public editedCommentTimestamp: number | null = null;

  public editedCommentCreatorId: string = '';

  public editedCommentCreatorName: string = '';

  constructor(private http: HttpClient) {
    this.comments = this.comments.filter(comment => comment !== undefined) as CommentDocument[];

  }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    // Make an HTTP GET request to get the comments for the current post
    this.http.get<CommentDocument[]>(`http://localhost:4005/comments?postId=${this.postId}`)
      .subscribe((comments: CommentDocument[]) => {
        this.comments = comments;
      });
  }

  isCommentCreator(comment: CommentDocument): boolean {
    return comment.creatorId === this.currentUser.id;
  }

  deleteComment(commentId: string): void {
    // Make an HTTP DELETE request to delete the comment
    this.http.delete(`http://localhost:4005/comments/${commentId}`)
      .subscribe(() => {
        this.comments = this.comments.filter(comment => comment.timestamp.toString() !== commentId);
      });
  }

  editComment(comment: CommentDocument): void {
    this.isCommentEditMode = true;
    this.editedCommentId = comment.timestamp.toString();
    this.editedCommentText = comment.text;
    this.editedCommentTimestamp = comment.timestamp;
    this.editedCommentCreatorId = comment.creatorId;
    this.editedCommentCreatorName = comment.creatorName;
  }

  // updateComment(): void {
  //   if (this.editedCommentText.trim() !== '') {
  //     // Make an HTTP PUT request to update the comment
  //     this.http.put(`http://localhost:4005/comments/${this.editedCommentId}`, {
  //       text: this.editedCommentText,
  //       timestamp: this.editedCommentTimestamp,
  //       creatorId: this.editedCommentCreatorId,
  //       creatorName: this.editedCommentCreatorName,
  //     }).subscribe(() => {
  //       this.comments = this.comments.map(comment => {
  //         if (this.editedCommentId === comment.timestamp.toString()) {
  //           return {
  //             text: this.editedCommentText,
  //             timestamp: this.editedCommentTimestamp,
  //             creatorId: this.editedCommentCreatorId,
  //             creatorName: this.editedCommentCreatorName,
  //           };
  //         }
         
  //       })
  //     })
  //   }
  // }
}