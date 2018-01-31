import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './list/user-list/userList.component';
import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  declarations: [UserListComponent, UserComponent]
})
export class UserModule { }
