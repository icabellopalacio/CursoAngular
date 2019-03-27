import { Equipo } from './Equipo';

export class Jugadores {
    constructor(
        public Nombre: string,
        public Anhos: number,
        public Demarcacion: string,
        public equipoActual: Equipo) {}
}
