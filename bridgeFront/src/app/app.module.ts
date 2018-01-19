import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {
  ButtonModule,
  GrowlModule,
  InputTextModule,
  MessageModule,
  MessagesModule,
  PasswordModule,
  FieldsetModule
} from 'primeng/primeng';
import {AppComponent} from './component/main/app.component';
import {LoginComponent} from './component/login/login.component';
import {IAuthService} from './services/interfaces/IAuth.services';
import {AuthService} from './services/impl/auth.service';
import {NotfoundComponent} from './component/not-found/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [FormsModule,
    ReactiveFormsModule, HttpClientModule,
    BrowserModule, BrowserAnimationsModule, InputTextModule,
    AppRoutingModule, PasswordModule, ButtonModule
    , GrowlModule, MessagesModule, MessageModule,FieldsetModule],
  providers: [HttpClientModule, {provide: 'IAuthService', useClass: AuthService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

