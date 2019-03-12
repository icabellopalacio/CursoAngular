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
// tslint:disable-next-line: max-line-length
    this.lstEquipos = [ new Equipo('Athletic club', 'Bilbao', 44100, new Date(1998, 1, 1), 'https://icon-icons.com/icons2/1637/PNG/48/athletic-bilbao_109476.png'),
// tslint:disable-next-line: max-line-length
                        new Equipo('F.C. Barcelona', 'Barcelona', 98000, new Date(1999, 1, 1), 'https://icon-icons.com/icons2/1637/PNG/48/barcelona_109494.png') ];
    this.filtroEquipos = '';
  }

  setEquipo() {
    if (this.varEquipo.Nombre !== '' && this.varEquipo.Ciudad !== '' && this.varEquipo.Socios > 0) {
      this.lstEquipos.push(this.varEquipo);
      this.varEquipo = new Equipo('', '', null, null, '');
    }
  }

  numSocios(parNumSocios: number ): string {
    if (parNumSocios > 1000) {
          return 'bg-secondary text-light border-left border-primary';
       }
  }

  showDetail(itemDetail: Equipo): void {
    this.selEquipo = itemDetail;
  }

}
