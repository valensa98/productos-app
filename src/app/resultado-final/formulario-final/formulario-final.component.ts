import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-final',
  templateUrl: './formulario-final.component.html',
  styleUrls: ['./formulario-final.component.css'],
})
export class FormularioFinalComponent {
  titulo = 'Formulario para Calcular Notas Finales';

  estudiantes: number = 15;
  nombres: string[] = []; // almacena los nombres de los estudiantes
  nuevoNombre: string = ''; // guarda el nombre que el usuario ingrese
  notasM1: number[] = []; // guarda las notas de la materia 1
  notasM2: number[] = []; // guarda las notas de la materia 2
  notasFinales: number[] = [];
  notasformulario: number[] = new Array(5); //Agrega las filas al formulario
  notaM1: number = 0; //almacena la nota de la materia 1
  notaM2: number = 0; //almacena la nota de la materia 2
  notaFinal: number = 0; //almacena la nota final del estudiante
  notaMateria1: number[] = [];
  notaMateria2: number[] = [];

  //se agrega el servicio en el constructor
  constructor(private router: Router, private route: ActivatedRoute) {}

  // Este funcionará cuando el usuario haga clic en el botón "Calcular Nota Final"
  @Output() ResultadoNota = new EventEmitter<number>();

  MostrarInformacion() {
    this.nombres.push(this.nuevoNombre); //agrega el estudiante a la lista de nombres
    this.calcularMaterias(); // se calculan las notas de las materias
    this.calcularNotaFinal(); // se calcula la nota final
  }

  calcularMaterias() {
    this.notaM1 =
      (this.notasM1[0] + this.notasM1[1]) * 0.15 +
      (this.notasM1[2] + this.notasM1[3]) * 0.1 +
      this.notasM1[4] * 0.5;
    this.notaMateria1.push(this.notaM1); //agrega la nota final de la materia1 a un arreglo

    this.notaM2 =
      (this.notasM2[0] + this.notasM2[1]) * 0.15 +
      (this.notasM2[2] + this.notasM2[3]) * 0.1 +
      this.notasM2[4] * 0.5;
    this.notaMateria2.push(this.notaM2); //agrega la nota final de la materia2 a un arreglo
  }

  calcularNotaFinal() {
    this.notaFinal = (this.notaM1 + this.notaM2) / 2;
    this.notasFinales.push(this.notaFinal); //agrega la nota final a un arreglo
  }
}
