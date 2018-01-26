import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './list/listuser/userList.component';
import {NotfoundComponent} from '../not-found/notfound.component';


const routes: Routes = [
      {path: 'user', component: UserListComponent , outlet: 'routerhome'},
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {
}
