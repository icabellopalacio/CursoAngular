import { Injectable } from '@angular/core';
import { Equipo } from '../Models/Equipo';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  // Variable
  lstEquipos: Array<Equipo>;

  // Init
  constructor() {
    this.lstEquipos = [
    new Equipo('Athletic CLub', 'Bilbao', 44000, null, null),
    new Equipo('F.C. Barcelona', 'Barcelona', 98000, null, null),
    new Equipo('R.Madrid', 'Madrid', 85000, null, null)];
  }

  // Functions
  getListEquipos(): Array<Equipo> {
    return  this.lstEquipos;
  }

  setEquipo(equipoToAdd: Equipo): Array<Equipo> {
    this.lstEquipos = [...this.lstEquipos, equipoToAdd];
    return this.lstEquipos;
  }

  getEquipo(nombreEquipo: string): Equipo {
    return this.lstEquipos.find(e => e.Nombre === nombreEquipo);
  }
}
