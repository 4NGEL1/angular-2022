import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancionDetailComponent } from './cancion-detail/cancion-detail.component';
import { CancionComponent } from './cancion/cancion.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
   {
    path: 'user/:id',
    component: UserDetailComponent
  },
  {
    path: 'Canciones',
    component: CancionComponent
  },
  {
    path: 'CancionDetail/:id',
    component: CancionDetailComponent
  },
  {
    path: 'CancionDetail',
    component: CancionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
