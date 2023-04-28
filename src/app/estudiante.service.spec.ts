/*import { FormularioFinalComponent } from './resultado-final/formulario-final/formulario-final.component';

describe('estudiante service', () => {
    let component: FormularioFinalComponent;
    let ESTUDIANTES;
    let mockEstudianteService;

    //prueba que verifica cuando guardamos un estudiante
    beforeEach(() => {
        //Arreglo de estudiantes
        ESTUDIANTES = [
            {
                name: 'Pablo',
                nombreMateria1: 'Fisica',
                nombreMateria2: 'Biologia',
                notasM1: [4, 4, 4, 4, 4],
                notasM2: [5, 5, 5, 5, 5],
            },
            {
                name: 'Ana',
                nombreMateria1: 'Fisica',
                nombreMateria2: 'Biologia',
                notasM1: [5, 4.5, 4, 4, 4],
                notasM2: [3, 5, 5, 5, 5],
            },
            {
                name: 'Juan',
                nombreMateria1: 'Fisica',
                nombreMateria2: 'Biologia',
                notasM1: [4, 4, 3.5, 4, 4],
                notasM2: [3, 5, 3, 5, 5],
            },
        ];

        //se inicia la variable mockHeroService y se establece el llamado al jazmin
        mockEstudianteService = jasmine.createSpyObj(['guardarEstudiantes']);

        //se construye el componente de estudiantes
        component = new FormularioFinalComponent(mockEstudianteService);
    });

    //prueba que verifica cuando guardamos un estudiante
    describe('agregarEstudiante', () => {
        it('Deberia agregar el estudiante a la lista de estudiantes', () => {
            mockEstudianteService.guardarEstudiantes.and.returnValue(of(true));
            component.estudiantes = ESTUDIANTES; // se configura el componente de estudiantes

            component.agregarEstudiante(ESTUDIANTES[1]); //se pasa el estudiante de la matriz
            expect(component.estudiantes.length).toBe(1);
        });
    });
});*/
