import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equipo } from '../Models/Equipo';
import es from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';

@Component({
  selector: 'app-cm-list-equipos',
  templateUrl: './cm-list-equipos.component.html',
  styleUrls: ['./cm-list-equipos.component.css']
})
export class CmListEquiposComponent implements OnInit {

   // Variables
   // ..................................
   @Input() newlstEquipo: Array<Equipo>;
   @Output() public emtEquipo = new EventEmitter<Equipo>();
   filtroEquipos: string;

  constructor() { }

  ngOnInit() {
    registerLocaleData(es);
    this.filtroEquipos = '';
  }

  numSocios(parNumSocios: number ): string {
    if (parNumSocios > 1000) {
          return 'bg-secondary text-light border-left border-primary';
       }
  }

  selectEquipo(equipoSel: Equipo) {
    this.emtEquipo.emit(equipoSel);
  }

}
