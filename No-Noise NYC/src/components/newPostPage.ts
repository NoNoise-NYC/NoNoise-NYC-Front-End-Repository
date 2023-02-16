import { Component, OnInit } from '@angular/core';
import { Menu, Popover, Transition } from '@headlessui/react';
import {BasicModalComponent} from './modal.js';

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


template: ` <div class="post-feed">
  hey
  </div>`,
styleUrls: ['./post.css']
})

export class PostFeedComponent implements OnInit {
  constructor(
   
    public likes: Number,
    public setLikes: Function,
    public loadPost: Function,
    ) {
      
    }
    
    ngOnInit(): void {
      this.loadPost();
    }
    
  
  }