import { Component, OnInit } from '@angular/core';
import { Equipo } from '../Models/Equipo';
import { Jugadores } from '../Models/Jugadores';
import { EquiposService } from "../Services/EquiposService";

@Component({
  selector: 'app-cm-jugadores',
  templateUrl: './cm-jugadores.component.html',
  styleUrls: ['./cm-jugadores.component.css']
})
export class CmJugadoresComponent implements OnInit {
  // Variables
  lstEquipos: Array<Equipo>;
  lstJugadores: Array<Jugadores>;
  itemJugadores: Jugadores;
  selJugador: Jugadores;
  constructor(private servEquipos: EquiposService) { }

  ngOnInit() {
    this.lstEquipos = this.servEquipos.getListEquipos();
    this.lstJugadores = [];
    this.itemJugadores = new Jugadores('', null, '', null);
    this.selJugador = null;
  }

  selectEquipo(nombreEquipo: string): void {
      this.lstJugadores = this.itemJugadores.getJugadores(this.servEquipos.getEquipo(nombreEquipo));
      this.selJugador = null;
  }

  selectJugador(jugadorSel: Jugadores): void {
    this.selJugador = jugadorSel;
  }

}
