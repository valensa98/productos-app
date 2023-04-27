import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './producto.model';
import { Estudiante } from './estudiante.model';

@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient) { }

    cargarProductos() {
        return this.httpClient.get<Producto[]>('https://fakestoreapi.com/products');
    }

    //guardar estudiantes
    guardarEstudiantes(estudiantes: Estudiante) {
        this.httpClient
            .post(
                'https://listado-estudiantes-promedio-default-rtdb.firebaseio.com/datos.json',estudiantes)
            .subscribe(
                (response) => console.log('resultado guardar estudiantes' + response),
                error =>console.log("Error al guardar Estudiantes: " + error)
              );
    }
}
    //regresa el arreglo de datos de la bd
    /*cargarEstudiantes() {
        //recupera la información de bd
        return this.httpClient.get<Estudiante>(
            'https://promedio-estudiantes-default-rtdb.firebaseio.com/'
        );
    }*/
