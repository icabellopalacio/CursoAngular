import { Component, OnInit} from '@angular/core';
import { Equipo } from '../Models/Equipo';
import es from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EquiposService } from '../Services/EquiposService';

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
  constructor(private frmBuilder: FormBuilder
            , private servEquipos: EquiposService) {}

  ngOnInit() {
    registerLocaleData(es);
    this.filtroEquipos = '';
    this.buildForm();
    this.selEquipo = null;
    this.lstEquipos = this.servEquipos.getListEquipos();
  }
  private buildForm() {
    this.frmEquipos = this.frmBuilder.group({
      Nombre: ['', Validators.required],
      Ciudad: ['', Validators.required],
      Socios: [null, Validators.required],
      Fundacion: [null , Validators.required]
    });
  }

  // Functions
   // ..................................
  setEquipo() {
    this.lstEquipos = this.servEquipos.setEquipo(this.frmEquipos.value);
    this.frmEquipos.reset();
  }

  showDetail(itemDetail: string): void {
      this.selEquipo = this.servEquipos.getEquipo(itemDetail);
    }
}
