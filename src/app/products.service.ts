import { Injectable } from '@angular/core';
import { DataServices } from './data.service';

@Injectable()
export class ProductsService {
  constructor(private dataServices: DataServices) {}

  //devuelve el resultado del metodo cargarProductos
  obtenerProductos() {
    return this.dataServices.cargarProductos();
  }
}
