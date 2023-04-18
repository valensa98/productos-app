import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataServices{

    constructor(private httpClient: HttpClient){}

    cargarProductos(){
        return this.httpClient.get(
            'https://fakestoreapi.com/products'
        );
    }
}