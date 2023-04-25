import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado-final',
  templateUrl: './resultado-final.component.html',
  styleUrls: ['./resultado-final.component.css']
})
export class ResultadoFinalComponent {
 
  
  constructor(
    private router: Router
  ) { }

  solucion(){
    
    //agregamos un nuevo elemento
    this.router.navigate(['productos/solucion']);
  }

  

  
}
