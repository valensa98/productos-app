import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Producto } from './producto.model';

@Injectable()
export class DataServices{

    constructor(private httpClient: HttpClient){}

    cargarProductos(){
        return this.httpClient.get<Producto[]>(
            'https://fakestoreapi.com/products'
        );
    }
}