import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from 'src/components/Signup';
import { LoginComponent } from 'src/components/Login';
import { NgModule, isDevMode } from '@angular/core';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
