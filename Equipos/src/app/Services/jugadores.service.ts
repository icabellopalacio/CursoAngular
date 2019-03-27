import { Injectable } from '@angular/core';
import { Equipo } from '../Models/Equipo';
import { Jugadores } from '../Models/Jugadores';
import { EquiposService } from './EquiposService';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  plantilla: Array<Jugadores>;
  constructor() {
    this.plantilla = [ new Jugadores('Aritz Aduriz', 37, 'Delantero centro', new Equipo('Athletic CLub', null, null, null, null)),
    new Jugadores('Oscar de Marcos', 31, 'Lateral derecho', new Equipo('Athletic CLub', null, null, null, null)),
    new Jugadores('Leo Messi', 30, 'Delantero centro', new Equipo('F.C. Barcelona', null, null, null, null)),
    new Jugadores('Jordi Alba', 30, 'Lateral izquierdo', new Equipo('F.C. Barcelona', null, null, null, null)),
    new Jugadores('Sergio Ramos', 32, 'Central', new Equipo('R.Madrid', null, null, null, null)),
    new Jugadores('Luka Modic', 34, 'Medio Centro', new Equipo('R.Madrid', null, null, null, null))];
   }

    getListJugadores(itemEquipo: Equipo ): Array<Jugadores> {
      return this.plantilla.filter(jugador => jugador.equipoActual.Nombre === itemEquipo.Nombre );
        }

    getJugador(nombreJugador: string): Jugadores {
        return this.plantilla.find(e => e.Nombre === nombreJugador);
    }

}
