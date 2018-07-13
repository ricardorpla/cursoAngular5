import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { CrearfacturaComponent } from './facturas/crearfactura/crearfactura.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearClienteComponent,
    CrearfacturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
