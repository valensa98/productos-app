/*import { DataServices } from "./data.service"
import { FormularioFinalComponent } from "./resultado-final/formulario-final/formulario-final.component";

describe('guardar estudiante', () => {

    let service: DataServices;
    let component: FormularioFinalComponent
    let ESTUDIANTES;
    let mockEstudianteService; //simulará el servicio


    //prueba que verifica cuando guardamos un estudiante
    beforeEach(() => {
        //Arreglo de estudiantes
        ESTUDIANTES = [
            { name: 'Pablo', nombreMateria1: 'Fisica', nombreMateria2: 'Biologia', notasM1: [4, 4, 4, 4, 4], notasM2: [5, 5, 5, 5, 5], notaM1:4,notaM2:5,notaFinal:4.5},
            { name: 'Ana', nombreMateria1: 'Fisica', nombreMateria2: 'Biologia', notasM1: [5, 4.5, 4, 4, 4], notasM2: [3, 5, 5, 5, 5] },
            { name: 'Juan', nombreMateria1: 'Fisica', nombreMateria2: 'Biologia', notasM1: [4, 4, 3.5, 4, 4], notasM2: [3, 5, 3, 5, 5] },
        ]

        //se inicia la variable mockHeroService y se establece el llamado al jazmin
        mockEstudianteService= jasmine.createSpyObj(['guardarEstudiantes']);

        //se construye el componente de estudiantes
        component = new FormularioFinalComponent(mockHeroService);
    })

        //prueba que verifica cuando guardamos un estudiante
        describe('guardarEstudiantes', ()=>{

            it('Deberia agregar el estudiante a la lista de estudiantes', ()=>{
                mockEstudianteService.guardarEstudiantes.and.returnValue(of(true))
                component.estudiantes = ESTUDIANTES; // se configura el componente de estudiantes

                component.guardarEstudiantes(ESTUDIANTES[1]); //se pasa el estudiante de la matriz
                expect(component.estudiantes.length).toBe(1);
            })

        })
})*/