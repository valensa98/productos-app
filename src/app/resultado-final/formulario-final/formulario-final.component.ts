import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/estudiante.model';
import { EstudianteService } from 'src/app/estudiante.service';

@Component({
  selector: 'app-formulario-final',
  templateUrl: './formulario-final.component.html',
  styleUrls: ['./formulario-final.component.css'],
})
export class FormularioFinalComponent {
  titulo = 'Formulario para Calcular Notas Finales';

  estudiantes: number = 0;
  registrosGuardados: number = 0;
  nombres: string[] = [];
  nombreMateria1: string = '';
  nombreMateria2: string = '';
  nuevoNombre: string = ''; // guarda el nombre que el usuario ingrese
  notasM1: number[] = []; // guarda las notas de la materia 1
  notaM1: number = 0; //almacena la nota de la materia 1
  notaMateria1: number[] = []; //almacena el resultado del calculo
  notasM2: number[] = []; // guarda las notas de la materia 2
  notaM2: number = 0; //almacena la nota de la materia 2
  notaMateria2: number[] = []; //almacena el resultado del calculo
  notasFinales: number[] = [];
  notaFinal: number = 0; //almacena la nota final del estudiante
  notasformulario: number[] = new Array(5); //Agrega las filas al formulario

  constructor(
    private router: Router,
    private estudianteService: EstudianteService,
    private route: ActivatedRoute
  ) {} //se agrega el servicio en el constructor

  @Output() ResultadoNota = new EventEmitter<number>(); // Este funcionará cuando el usuario haga clic en el botón "Calcular Nota Final"

  /*validarInput(): void {
  const btnValidar = document.getElementById("btn_Validar") as HTMLButtonElement; //obtiene el valor del botón por medio del id
    const inputValidar1 = document.getElementById("validar_input1") as HTMLInputElement;//obtiene el valor del input por medio del id
    const inputValidar2 = document.getElementById("validar_input2") as HTMLInputElement;//obtiene el valor del input por medio del id
    btnValidar.disabled = !(inputValidar1.value.length && inputValidar2.value.length); //evalua la longitud del input y asigna true o false al disable
  
  }*/

  MostrarInformacion() {
    this.nombres.push(this.nuevoNombre); //agrega el estudiante a la lista de nombres
    this.calcularMaterias(); // se calculan las notas de las materias
    this.calcularNotaFinal(); // se calcula la nota final
    this.estudiantes++;
    this.GuardarInformacion();
  }

  GuardarInformacion() {
    if (this.registrosGuardados < 3) {
      this.estudianteService.agregarEstudiante(
        new Estudiante(
          this.nuevoNombre,this.nombreMateria1,this.nombreMateria2,this.notasM1,
          this.notasM2,this.notaM1,this.notaM2,this.notaFinal
        ));
      alert('El registro se almaceno con exito');
      this.registrosGuardados++;
      console.log(this.registrosGuardados)
      if (this.registrosGuardados === 3) {
        alert('Todos los registros se ingresaron exitosamente');
      }
    } else {
      alert('No se pueden guardar más registros');
    }
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

  validarRango(): boolean {
    for (let i = 0; i < 5; i++) {
      if (this.notasM1[i] < 0.5 || this.notasM1[i] > 5) {
        alert('El rango de notas debe ser de 0.5 a 5');
        return false;
      } else if (this.notasM2[i] < 0.5 || this.notasM2[i] > 5) {
        alert('El rango de notas debe ser de 0.5 a 5');
        return false;
      }
    }
    return true;
  }

  ListarEstudiantes(): void {
    const tablaEstudiantes = document.getElementById('tabla-estudiantes') as HTMLTableElement; //obtiene las referencias de la tabla con sus estudiantes y sus filas
    const filas = Array.from(tablaEstudiantes.querySelectorAll('tr')); //las convierte en un array
    const ordenarPorNotaFinal = (a: HTMLElement, b: HTMLElement) => {
      //compara dos filas de la tabla en función de la nota final de cada una
      const notaFinalA = parseFloat(
        a.querySelector('td:last-of-type')!.textContent!
      ); //busca el el elemento de tipo td que se encuentre en la fila a y lo convierte en un numero.
      const notaFinalB = parseFloat(
        b.querySelector('td:last-of-type')!.textContent!
      );
      return notaFinalB - notaFinalA; //resta los elementos, si la diferencia es positiva, entonces notaFinalB es mayor que notaFinalA
    };
    filas.sort(ordenarPorNotaFinal); //ordena las filas con el metodo sort

    //para cada elemento de la coleccion 
    filas.forEach((fila, index) => {
      fila.querySelector('td:first-of-type')!.textContent = ( //me devuelva el primer elemento de la fila
        index + 1
      ).toString();
      tablaEstudiantes.appendChild(fila);
      //agrega elementos o actualiza existentes
    });
  }
}
