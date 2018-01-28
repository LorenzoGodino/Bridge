import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './list/listuser/userList.component';
import {HomeComponent} from "../home/home.component";
import {NotfoundComponent} from "../not-found/notfound.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'user',
        component: UserListComponent,
        outlet: 'routerhome'
      }
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
