import { Component, OnInit} from '@angular/core';
import { Equipo } from '../Models/Equipo';
import es from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cm-add-equipo',
  templateUrl: './cm-add-equipo.component.html',
  styleUrls: ['./cm-add-equipo.component.css']
})
export class CmAddEquipoComponent implements OnInit {

   // Variables
   // ..................................
  itemEquipo: Equipo;
   filtroEquipos: string;
   selEquipo: Equipo;
   frmEquipos: FormGroup;
   lstEquipos: Array<Equipo>;
   // Init
   // ..................................
  constructor(private frmBuilder: FormBuilder) {}

  ngOnInit() {
    registerLocaleData(es);
    this.filtroEquipos = '';
    this.buildForm();
    this.selEquipo = new Equipo(null, null, null, null, null);
    this.lstEquipos = [];
  }
  private buildForm() {
    this.frmEquipos = this.frmBuilder.group({
      Nombre: ['', Validators.required],
      Ciudad: ['', Validators.required],
      Socios: [null, Validators.required],
      Fundacion: [null , Validators.required],
      Escudo: ['']
    });
  }

  // Functions
   // ..................................
  setEquipo() {
    this.lstEquipos.push(new Equipo(this.frmEquipos.value.Nombre
                                , this.frmEquipos.value.Ciudad
                                , this.frmEquipos.value.Socios
                                , this.frmEquipos.value.Fundacion
                                , this.frmEquipos.value.Escudo));
    this.frmEquipos.reset();
  }

    showDetail(itemDetail: Equipo): void {
    this.selEquipo = itemDetail;
  }
}
