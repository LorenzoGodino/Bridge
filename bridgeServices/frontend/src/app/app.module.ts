import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';
import {HomeModule} from './core/components/home/home.module';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {InputTextModule, AccordionModule, PanelModule, ButtonModule, RadioButtonModule, PasswordModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        InputTextModule,
        AccordionModule,
        PanelModule,
        ButtonModule,
        RadioButtonModule,
        PasswordModule,
        CoreModule,
        AuthModule,
        HomeModule,
        routing
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
