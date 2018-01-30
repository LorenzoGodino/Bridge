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
      {path: '', component: UserListComponent ,    outlet : 'bookPopup', },
    ]
  },
  {path: '**', component: NotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {
}
