import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';
import {HomeModule} from './core/components/home/home.module';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {AccordionModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
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
