import {Curso} from '../Modules/curso' ;
export class Alumno {
    // Constructor
    constructor(
        public id: number,
        public Nombre: string,
        public Apellidos: string,
        public telefono: string,
        public email: string,
        public cursos: Array<Curso>) { }
}
