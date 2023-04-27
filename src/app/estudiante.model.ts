export class Estudiante {
  //sintaxis simplificada donde creamos los atributos y los inicializamos
  constructor(
    public nombreEstudiante: string, 
    public nombreMateria1: string,
    public nombreMateria2: string,
    public notasM1: number[],
    public notasM2: number[],
    public notaM1: number,
    public notaM2: number,
    public notaFinal:number
  ) {}
}
