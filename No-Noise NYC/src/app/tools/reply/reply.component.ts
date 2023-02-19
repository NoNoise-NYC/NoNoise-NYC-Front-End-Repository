import { Component, Input, OnInit } from '@angular/core';
import { FirebaseTSFirestore, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { Comment } from '../../shared/models/comment.model';
import firebase from 'firebase/app';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  @Input() postId: string = '';

  public comments: FirebaseTSFirestore<Comment>;

  private app: firebase.app.App;
  private db: firebase.firestore.Firestore;

  constructor() {
    this.app = FirebaseTSApp.getApp();
    this.db = this.app.firestore();
  }

  ngOnInit(): void {
    this.comments = new FirebaseTSFirestore<Comment>({
      app: this.app,
      path: `posts/${this.postId}/comments`,
      orderBy: new OrderBy('timestamp', 'asc'),
      onSnapshot: (docs: Comment[]) => {
        // Update comments
      },
      onError: (error: Error) => {
        console.error(error);
      }
    });
  }

  isCommentCreator(comment: Comment){
    if (comment.creatorId == FirebaseTSApp.getUserDocument().userId) {
      return true;
    }
    return false;
  }

  deleteComment(comment: Comment){
    this.comments.remove(comment.id);
  }

  editComment(comment: Comment){
    this.comments.update(comment.id, {text: comment.text});
  }

  postComment(text: string){
    const postCommentDoc = {
      text: text,
      timestamp: firebase.firestore.Timestamp.now(),
      creatorId: FirebaseTSApp.getUserDocument().userId,
      creatorName: FirebaseTSApp.getUserDocument().publicName
    };
    this.comments.add(postCommentDoc, {
      onComplete: (docId: any) => {
        console.log(`Comment ${docId} has been posted!`);
      },
      onError: (error: Error) => {
        console.error(error);
      }
    });
  }

  onSendClick(commentInput: HTMLInputElement): void {
    const text = commentInput.value;
    if (text.trim() !== '') {
      this.postComment(text);
      commentInput.value = '';
    }
  }
}
