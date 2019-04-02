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
  @Input() newlstEquipo: Array<Alumno>;
  constructor() { }

  ngOnInit() {
  }

}
