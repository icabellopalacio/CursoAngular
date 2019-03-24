import { Pipe, PipeTransform } from '@angular/core';
import { Equipo } from './../Models/Equipo';

@Pipe({
  name: 'teamFilter',
  pure: false
})
export class TeamFilterPipe implements PipeTransform {
  transform(itemEquipos: Array<Equipo>, filtroNombre?: string): any {
    console.log(itemEquipos);
    console.log(filtroNombre);
    return itemEquipos.filter(e => e.Nombre.toLocaleLowerCase().indexOf(filtroNombre.toLocaleLowerCase()) !== -1);
  }
}
