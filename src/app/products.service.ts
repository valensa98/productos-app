import { Injectable } from '@angular/core';
import { DataServices } from './data.service';
import { Producto } from './producto.model';

@Injectable()
export class ProductsService {
  personas: Producto[] = [];

  constructor(private dataServices: DataServices) {}

  //devuelve el resultado del metodo cargarProductos
  obtenerProductos() {
    return this.dataServices.cargarProductos();
  }
}
