import { Component } from '@angular/core';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RegisterComponent } from './register/register.component';

// export const AppRoutes: Routes = [
//   { path: '',redirectTo: 'dashboard', pathMatch: 'full',}, 
//   { path: '', component: AdminLayoutComponent, children: [{ path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule' }]},
//   // { path: '**', redirectTo: 'dashboard'}
// ]


export const AppRoutes: Routes = [
  // {
  //   path: 'dashboard',
   
  //   pathMatch: 'full',
  //   component:AdminLayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  //       // loadChildren: './login/LoginComponent'
  //     }],
  //     canActivate:[UserService]
  // },
  // {
  //   path: 'login',
  //   redirectTo: '',
  //   pathMatch: 'full',
  //  }, 

  {
    path: '',
    component: LoginComponent,
    // canActivate:[UserService]

    
  },
  {
    path: 'login',
    component: LoginComponent
    
  },
  {
    path: 'register',
    component: RegisterComponent
    
  },
   {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
       
      }],
      canActivate:[UserService]

  },
  {
    path: '**',
    redirectTo: 'login'
  }
]


const routes=[
  {
    path:"admin",
    Component:AdminLayoutComponent,
    
  },
  {}
]