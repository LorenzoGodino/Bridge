import {BrowserModule} from '@angular/platform-browser';
import {FormControlName, FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule, GrowlModule, InputTextModule, PasswordModule} from 'primeng/primeng';
import {AppComponent} from './component/main/app.component';
import {LoginComponent} from './component/login/login.component';
import {IAuthService} from './services/interfaces/IAuth.services';
import {AuthService} from './services/impl/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [ FormsModule, HttpClientModule,
    BrowserModule, BrowserAnimationsModule, InputTextModule,
    AppRoutingModule, PasswordModule, ButtonModule
    , GrowlModule],
  providers: [HttpClientModule, {provide: 'IAuthService', useClass: AuthService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
