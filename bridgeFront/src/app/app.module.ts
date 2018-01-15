import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {ButtonModule, InputTextModule, PasswordModule} from 'primeng/primeng';
import {AppComponent} from './component/main/app.component';
import {LoginComponent} from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, InputTextModule, AppRoutingModule, PasswordModule, ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
