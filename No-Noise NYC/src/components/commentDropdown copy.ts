import { Component, OnInit } from '@angular/core';
import { ChatBubbleLeftEllipsisIcon,
  CodeBracketIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  FlagIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ShareIcon,
  StarIcon,
} from '@heroicons/react/20/solid';
import { CommentListComponent } from './comment-list.component';

@Component({
  selector: 'app-comment-dropdown',
  template: `
    <div class="relative inline-block text-left">
      <div>
        <button class="btn" [ngStyle]="buttonStyles">∨</button>
      </div>

      <app-comment-list [postId]="postId"></app-comment-list>
    </div>
  `
})
export class CommentDropdownComponent implements OnInit {
  postId: any;
  buttonStyles = {
    height: '50',
    width: '120',
    color: 'black',
    fontWeight: '40',
    marginRight: '0',
    borderColor: 'transparent'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
