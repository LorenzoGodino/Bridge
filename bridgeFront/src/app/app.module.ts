import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {
  ButtonModule,
  FieldsetModule,
  GrowlModule,
  InputTextModule,
  MenubarModule,
  MessageModule,
  MessagesModule,
  PasswordModule
} from 'primeng/primeng';
import {MenuComponent} from './component/menu/menu.component';
import {AppComponent} from './component/main/app.component';
import {LoginComponent} from './component/login/login.component';
import {IAuthService} from './services/interfaces/iauth.services';
import {AuthService} from './services/impl/auth.service';
import {NotfoundComponent} from './component/not-found/notfound.component';
import {AuthGuard} from './guards/auth-guard';
import {UserModule} from './component/user/user.module';
import {HomeComponent} from './component/home/home.component';
import {UserRoutingModule} from './component/user/user-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [FormsModule,
    ReactiveFormsModule, HttpClientModule, MenubarModule,
    BrowserModule, BrowserAnimationsModule, InputTextModule,
    AppRoutingModule, PasswordModule, ButtonModule
    , GrowlModule, MessagesModule, MessageModule, FieldsetModule, UserModule, UserRoutingModule],
  providers: [AuthGuard, HttpClientModule, {provide: 'IAuthService', useClass: AuthService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

