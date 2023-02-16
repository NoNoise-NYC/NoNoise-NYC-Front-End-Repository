import { Component, OnInit } from '@angular/core';
import { Menu, Popover, Transition } from '@headlessui/react';
import { BasicModalComponent } from './modal.js';

import {
  ChatBubbleLeftEllipsisIcon,
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
import {
  ArrowTrendingUpIcon,
  Bars3Icon,
  BellIcon,
  FireIcon,
  HomeIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

@Component({
  selector: 'app-post-feed',
  template: `
    <div class="post-feed">
      <div class="header">
        <div class="header-left">
          <HomeIcon />
          <span>Facebook</span>
        </div>
        <div class="header-right">
          <Bars3Icon />
        </div>
      </div>
      <div class="posts-container">
        <ng-container *ngFor="let post of posts">
          <div class="post">
            <div class="post-header">
              <img
                src="https://avatars0.githubusercontent.com/u/12573400?s=460&u=cdbdc89cd3f9349944bbec0b066c6863cc2c0d09&v=4"
                class="post-header-image"
              />
              <div class="post-header-info">
                <span class="post-header-username">John Doe</span>
                <br />
                <span class="post-header-time">Just now</span>
              </div>
            </div>
            <div class="post-body">
              {{ post.body }}
            </div>
            <div class="post-footer">
              <div class="post-footer-left">
                <HandThumbUpIcon />
                <span>{{ post.likes }}</span>
              </div>
              <div class="post-footer-right">
                <EllipsisVerticalIcon />
              </div>
            </div>
          </div>
        </ng-container>
      </div>
    </div>
  `,
  styleUrls: ['./post.css'],
})
export class PostFeedComponent implements OnInit {
  posts: any[];

  constructor(public likes: Number, public setLikes: Function, public loadPost: Function) {
    this.posts = []
  }

  ngOnInit(): void {
    this.loadPost().subscribe((data:any) => {
      this.posts = data;
    });
  }
}
