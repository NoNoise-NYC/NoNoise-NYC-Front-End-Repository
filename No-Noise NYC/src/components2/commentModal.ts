import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewCommentModalComponent } from './new-comment-modal/new-comment-modal.component';

@Component({
  selector: 'app-comment-modal',
  template: `
  <button mat-icon-button (click)="openDialog()">
    <mat-icon>chat_bubble_outline</mat-icon>
  </button>
  `
})
export class CommentModalComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewCommentModalComponent, {
      width: '400px',
    });
  }
}
