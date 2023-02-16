import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-basic-modal',
  template: `
    <button style="background-color: #1976D2; height: 50px; width: 120px; color: black" (click)="handleOpen()">Post</button>
    <ng-template #modal>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 400px; background-color: 'background.paper'; border: 2px solid #000; box-shadow: 24px; padding: 4px;">
        <app-comment></app-comment>
      </div>
    </ng-template>
  `,
  styleUrls: []
})
export class BasicModalComponent {
  dialogRef: MatDialogRef<CommentComponent>;

  constructor(private dialog: MatDialog) { }

  handleOpen() {
    this.dialogRef = this.dialog.open(CommentComponent, {
      height: '400px',
      width: '600px'
    });
  }
}