export class Producto {

  //creamos los atributos y los inicializamos
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public category:string,
    public description:string,
    public image: string){

  }
}
