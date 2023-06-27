import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa el módulo HttpClientModule
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CarritoPageComponent } from './carrito-page/carrito-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CarritoPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Agrega el HttpClientModule aquí
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
