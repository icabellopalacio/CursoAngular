import { Component, OnInit} from '@angular/core';
import { Equipo } from '../Models/Equipo';
import es from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
@Component({
  selector: 'app-cm-add-equipo',
  templateUrl: './cm-add-equipo.component.html',
  styleUrls: ['./cm-add-equipo.component.css']
})
export class CmAddEquipoComponent implements OnInit {

   // Variables
   varEquipo: Equipo;
   lstEquipos: Array<Equipo>;
   filtroEquipos: string;
   selEquipo: Equipo;
  constructor() { }

  ngOnInit() {
    registerLocaleData(es);
    this.varEquipo = new Equipo('', '', null, null, '');
    this.lstEquipos = [];
    this.filtroEquipos = '';
  }

  setEquipo() {
    if (this.varEquipo.Nombre !== '' && this.varEquipo.Ciudad !== '' && this.varEquipo.Socios > 0) {
      this.lstEquipos.push(this.varEquipo);
      this.varEquipo = new Equipo('', '', null, null, '');
    }
  }

  numSocios(parNumSocios: number ): string {
    console.log(parNumSocios);
    if (parNumSocios > 1000) {
          return 'bg-secondary text-light';
       }
  }

  showDetail(itemDetail: Equipo) {
    this.selEquipo = itemDetail;
  }

}
