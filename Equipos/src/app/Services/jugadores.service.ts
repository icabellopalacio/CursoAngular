import { Injectable } from '@angular/core';
import { Equipo } from '../Models/Equipo';
import { Jugadores } from '../Models/Jugadores';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor() { }

  getJugadores(itemEquipo: Equipo ): Array<Jugadores> {
    let plantilla: Array<Jugadores>;
    plantilla = [];
    if (itemEquipo.Nombre.indexOf('Athletic') !== -1) {
        plantilla = [
            new Jugadores('Aritz Aduriz', 37, 'Delantero centro', itemEquipo),
            new Jugadores('Oscar de Marcos', 31, 'Lateral derecho', itemEquipo)
        ];
    }
    if (itemEquipo.Nombre.indexOf('Barcelona') !== -1) {
        plantilla = [
            new Jugadores('Leo Messi', 30, 'Delantero centro', itemEquipo),
            new Jugadores('Jordi Alba', 30, 'Lateral izquierdo', itemEquipo)
        ];
    }
    return plantilla;
}

}