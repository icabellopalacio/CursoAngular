import {Alumno} from '../Modules/alumno' ;

export class Curso {
    // Constructor
    constructor(
        public id: number,
        public Nombre: string,
        public horas: number,
        public alumnos: Array<Alumno>
    ){}
}
