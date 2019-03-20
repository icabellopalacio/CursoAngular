import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmAddEquipoComponent } from './cm-add-equipo/cm-add-equipo.component';
import { JugadoresComponent } from './jugadores/jugadores.component';

const routes: Routes = [
  {
    path: 'Equipos',
    component: CmAddEquipoComponent
  },
  {
    path: 'Jugadores',
    component: JugadoresComponent
  },
  {
    path: '',
    component: CmAddEquipoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
