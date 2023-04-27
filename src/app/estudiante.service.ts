import { Injectable } from '@angular/core';
import { DataServices } from './data.service';
import { Estudiante } from './estudiante.model';

@Injectable()
export class EstudianteService {
  estudiantes: Estudiante[] = [];
  //se inyecta el servicio en el constructor de la clase
  constructor(private dataServices: DataServices) {}

  agregarEstudiante(estudiante: Estudiante) {
    this.estudiantes.push(estudiante);
    this.dataServices.guardarEstudiantes(estudiante);
  }
}


  //devuelve el resultado del metodo cargar personas
  /* obtenerEstudiantes() {
    return this.dataServices.cargarEstudiantes();
  }*/
