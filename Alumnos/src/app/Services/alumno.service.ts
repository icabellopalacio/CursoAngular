import { Injectable } from '@angular/core';
import {Alumno} from '../Modules/alumno';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
   // Variables
  // ..................................
  lstAlumno: Array<Alumno>;

 // Init
  constructor() { }
  // Functions
  getListAlumnos(): Array<Alumno> {
    return this.lstAlumno;
  }

}

