import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { Tarjeta1Component } from './components/tarjeta1/tarjeta1.component';
import { Tarjeta2Component } from './components/tarjeta2/tarjeta2.component';
import { Tarjeta3Component } from './components/tarjeta3/tarjeta3.component';
import { Tarjeta4Component } from './components/tarjeta4/tarjeta4.component';
import { Tarjeta5Component } from './components/tarjeta5/tarjeta5.component';
import { Tarjeta6Component } from './components/tarjeta6/tarjeta6.component';
import { Tarjeta7Component } from './components/tarjeta7/tarjeta7.component';
import { Tarjeta8Component } from './components/tarjeta8/tarjeta8.component';
import { Tarjeta9Component } from './components/tarjeta9/tarjeta9.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    Tarjeta1Component,
    Tarjeta2Component,
    Tarjeta3Component,
    Tarjeta4Component,
    Tarjeta5Component,
    Tarjeta6Component,
    Tarjeta7Component,
    Tarjeta8Component,
    Tarjeta9Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
