import { Component } from '@angular/core';
import { Producto } from '../producto.model';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { enableProdMode } from '@angular/core';

// Activar el modo de producción
enableProdMode();

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  productos: Producto[] = [];
  precioTotal: number = 0;
  PromedioPrecios: number = 0;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productsService.obtenerProductos().subscribe((productosObtenidos) => {
      this.productos = productosObtenidos;
      this.CalcularPrecioTotal();
      this.CalcularPromedio();
    });
  }

  CalcularPrecioTotal() {
    //reduce: (guarda el valor acumulado de la matriz) suma el precio del producto y lo almacena en total
    this.precioTotal = this.productos

      //suma el precio del producto al acumulador
      .reduce((total, product) => total + product.price, 0);
  }

  CalcularPromedio() {
    const cantidadProductos = this.productos.length;
    const precioTotal = this.precioTotal;
    this.PromedioPrecios = precioTotal / cantidadProductos;
  }
}
