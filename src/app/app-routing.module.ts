import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ResultadoFinalComponent } from './resultado-final/resultado-final.component';

//se define la variable de rutas
const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'productos',component: ProductsComponent,
    children: [
      { path: 'solucion', component: ResultadoFinalComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


