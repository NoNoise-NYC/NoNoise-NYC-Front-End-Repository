import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
selector: 'app-create-post',
templateUrl: './create-post.component.html',
styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  selectedImageFile: File | null = null;


constructor(private dialog: MatDialogRef<CreatePostComponent>) { }

ngOnInit(): void {
}

onPostClick(commentInput: HTMLTextAreaElement) {
const comment = commentInput.value;
if (comment.length <= 0) {
return;
}
if (this.selectedImageFile) {
this.uploadImagePost(comment);
} else {
this.uploadPost(comment);
}
}

uploadImagePost(comment: string) {
const postId = this.genDocId();
this.uploadFile(this.selectedImageFile, postId)
.then(downloadUrl => {
this.createPost({ comment, creatorId: "currentUserUid", imageUrl: downloadUrl, timestamp: new Date() }, postId);
});
}

genDocId(): string {
return Math.random().toString(36).substring(2, 10);
}

async uploadFile(file: File, postId: string): Promise<string> {
// code for uploading the file to storage goes here, then return the download URL
return Promise.resolve("downloadUrl");
}

createPost(data: { comment: string; creatorId: string; imageUrl?: string; timestamp: Date }, postId: string) {
// code for creating a new post in the database goes here
this.dialog.close();
}

uploadPost(comment: string) {
this.createPost({ comment, creatorId: "currentUserUid", timestamp: new Date() }, this.genDocId());
}

onPhotoSelected(photoSelector: HTMLInputElement) {
this.selectedImageFile = photoSelector.files[0];
if (!this.selectedImageFile) {
return;
}
const fileReader = new FileReader();
fileReader.readAsDataURL(this.selectedImageFile);
fileReader.addEventListener(
"loadend",
ev => {
const readableString = fileReader.result.toString();
const postPreviewImage = <HTMLImageElement>document.getElementById("post-preview-image");
postPreviewImage.src = readableString;
}
);
}
}