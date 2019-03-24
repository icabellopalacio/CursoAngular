import { Component, OnInit } from '@angular/core';
import { Equipo } from '../Models/Equipo';
import { Jugadores } from '../Models/Jugadores';

@Component({
  selector: 'app-cm-jugadores',
  templateUrl: './cm-jugadores.component.html',
  styleUrls: ['./cm-jugadores.component.css']
})
export class CmJugadoresComponent implements OnInit {
  //Variables 
  lstEquipos : Array<Equipo>;
  lstJugadores : Array<Jugadores>;
  itemJugadores : Jugadores;
  constructor() { }

  ngOnInit() {
    this.lstEquipos = [
      new Equipo('Athletic CLub', 'Bilbao', 44000, null, null),
      new Equipo('F.C. Barcelona', 'Barcelona', 98000, null, null),
    ];
    this.lstJugadores = [];
    this.itemJugadores = new Jugadores('', null, '', null);
  }

  selectEquipo(equipoSel: Equipo): void{
      this.lstJugadores = this.itemJugadores.getJugadores(equipoSel);
      console.log(this.lstJugadores);
  }
 
}
