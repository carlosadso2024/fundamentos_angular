import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TareaPadre } from './components/tarea-padre/tarea-padre';
import { TareaHijo } from './components/tarea-hijo/tarea-hijo';
import { FormsModule } from '@angular/forms';
import { Directivas } from './directivas/directivas';

@NgModule({
  declarations: [
    App,
    TareaPadre,
    TareaHijo,
    Directivas
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
