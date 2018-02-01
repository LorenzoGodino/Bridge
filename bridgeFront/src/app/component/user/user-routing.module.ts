import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from '../not-found/notfound.component';
import {UserComponent} from './user.component';
import {UserListComponent} from './list/user-list/userList.component';

const routes: Routes = [
  {
    path: 'userList',
    component: UserComponent,
    children: [
      {path: '', component: UserListComponent, outlet: 'userRouter',},
    ]
  },
  {path: '404',  component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {
}
