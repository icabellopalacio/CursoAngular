import { Component, OnInit } from '@angular/core';
import { Equipo } from '../Models/Equipo';

@Component({
  selector: 'app-cm-add-equipo',
  templateUrl: './cm-add-equipo.component.html',
  styleUrls: ['./cm-add-equipo.component.css']
})
export class CmAddEquipoComponent implements OnInit {

   // Variables
   varEquipo: Equipo;
   lstEquipos: Array<Equipo>;
  constructor() { }

  ngOnInit() {
    this.varEquipo = new Equipo('', '', null, null);
    this.lstEquipos = [];
  }

  setEquipo() {
    if (this.varEquipo.Nombre !== '' && this.varEquipo.Ciudad !== '' && this.varEquipo.Socios > 0) {
      this.lstEquipos.push(this.varEquipo);
      this.varEquipo = new Equipo('', '', null, null);
    }
  }
  
  numSocios(parNumSocios: number ): string {
    console.log(parNumSocios);
    if (parNumSocios > 1000) {
          return 'muchosSocios';
       }
  }

}
