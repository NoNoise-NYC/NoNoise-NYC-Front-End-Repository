import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
 
 
  { 
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)
  },
  { 
    path: 'blog',
    component: BlogComponent,
    loadChildren: () => import('./blog/blog.module').then(m=>m.BlogModule)
  },
  { 
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m=>m.PagesModule)
  },
  { 
    path: '**', 
    redirectTo: 'home/one'
  }
];

