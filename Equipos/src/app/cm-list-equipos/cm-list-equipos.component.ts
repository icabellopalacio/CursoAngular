import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    registerLocaleData(es);
    this.newlstEquipo = [];
  }

  numSocios(parNumSocios: number ): string {
    if (parNumSocios > 1000) {
          return 'bg-secondary text-light border-left border-primary';
       }
  }

}
