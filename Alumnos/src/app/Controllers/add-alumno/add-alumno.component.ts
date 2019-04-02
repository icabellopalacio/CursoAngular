import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import es from '@angular/common/locales/es';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})

export class AddAlumnoComponent implements OnInit {
  //Variables
  // ..................................
  frmAlumnos: FormGroup;
  
  // Init
   // ..................................
  constructor(private frmBuilder: FormBuilder) { }

  ngOnInit() {
    registerLocaleData(es);
    this.buildForm();
  }

  private buildForm(){
    this.frmAlumnos = this.frmBuilder.group({
      Nombre: ['', Validators.required],
      Appelido1: ['', Validators.required],
      Appelido2: [''],
      Telefono: [null , Validators.required]
    });
  }

}
