import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

// Routes
const routes: Routes = [
  { 
    path: 'one',
    component: HomeComponent,
    data: {
      title: "No Noise NYC",
      
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
