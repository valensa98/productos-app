import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products.service';
import { DataServices } from './data.service';
import { ResultadoFinalComponent } from './resultado-final/resultado-final.component';
import { FormularioFinalComponent } from './resultado-final/formulario-final/formulario-final.component';
import { FormsModule } from '@angular/forms';
import { EstudianteService } from './estudiante.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ResultadoFinalComponent,
    FormularioFinalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ProductsService, DataServices, EstudianteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
