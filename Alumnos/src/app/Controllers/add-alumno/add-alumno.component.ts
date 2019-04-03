import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import es from '@angular/common/locales/es';
import { Alumno } from 'src/app/Modules/alumno';
import {AlumnoService} from '../../Services/alumno.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})

export class AddAlumnoComponent implements OnInit {

  // Variables
  // ..................................
  frmAlumnos: FormGroup;
  lstAlumno: Array<Alumno>;

  // Init
  // ..................................
  constructor(private frmBuilder: FormBuilder,
              private servAlumno: AlumnoService) { }

  ngOnInit() {
    registerLocaleData(es);
    this.buildForm();
    this.lstAlumno = this.servAlumno.getListAlumnos();
  }

  private buildForm() {
    this.frmAlumnos = this.frmBuilder.group({
      Nombre: ['', Validators.required],
      Apelido: ['', Validators.required],
      Telefono: [null],
      Email: [null]
    });
  }

}
