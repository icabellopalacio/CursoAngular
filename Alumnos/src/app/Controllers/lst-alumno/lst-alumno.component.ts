import { Component, OnInit, Input } from '@angular/core';
import { Alumno } from 'src/app/Modules/alumno';

@Component({
  selector: 'app-lst-alumno',
  templateUrl: './lst-alumno.component.html',
  styleUrls: ['./lst-alumno.component.css']
})
export class LstAlumnoComponent implements OnInit {
  // Variables
   // ..................................
  @Input() lstAlumnos: Array<Alumno>;
  constructor() { }

  ngOnInit() {
    
  }

}
