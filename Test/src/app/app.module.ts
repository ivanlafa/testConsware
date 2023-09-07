import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { HttpClientModule } from '@angular/common/http'
import  { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPlatoComponent } from './lista-platos/lista-plato.component';
import { EditarPlatoComponent } from './editar-plato/editar-plato.component';
import { PlatoService } from './shared/plato.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaPlatoComponent,
    EditarPlatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PlatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
