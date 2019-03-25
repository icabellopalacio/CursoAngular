import { Component, OnInit } from '@angular/core';
import { Equipo } from '../Models/Equipo';
import { Jugadores } from '../Models/Jugadores';

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
  constructor() { }

  ngOnInit() {
    this.lstEquipos = [
      new Equipo('Athletic Club', 'Bilbao', 44000, null, 'https://www.aupaathletic.com/media/el-club/escudo/escudo-athletic-club-1972.gif'),
      new Equipo('F.C. Barcelona', 'Barcelona', 98000, null, null),
    ];
    this.lstJugadores = [];
    this.itemJugadores = new Jugadores('', null, '', null);
    this.selJugador = null;
  }

  selectEquipo(equipoSel: Equipo): void {
      this.lstJugadores = this.itemJugadores.getJugadores(equipoSel);
      this.selJugador = null;
  }

  selectJugador(jugadorSel: Jugadores): void {
    this.selJugador = jugadorSel;
  }

}