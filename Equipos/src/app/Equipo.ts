export class Equipo {
// Properties
    ID: number;
    Nombre: string;
    Ciudad: string;
    Socios: number;
    Funsacion: Date;

// constructor
    constructor(parID: number, parNombre: string, parCiudad: string, parSocios: number, parFundacion: Date) {
        this.ID = parID;
        this.Nombre = parNombre;
        this.Ciudad = parCiudad;
        this.Socios = parSocios;
        this.Funsacion = parFundacion;

    }
}
