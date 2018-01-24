import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {NotfoundComponent} from './component/not-found/notfound.component';
import {BoardComponent} from './component/board/board.component';
import {AuthGuard} from './guards/auth-guard';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'board', component: BoardComponent , canActivate : [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
