import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './component/main/app.component';
import { LoginComponent } from './component/login/login.component';


@NgModule({
    declarations: [
        AppComponent,
        AppRoutingModule,
        LoginComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
