import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserSingleComponent } from './user-single/user-single.component';


const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'list', component: UserSingleComponent },


  

];


@NgModule({
  declarations: [UserListComponent, UserSingleComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
