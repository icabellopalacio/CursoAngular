import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmAddEquipoComponent } from './cm-add-equipo/cm-add-equipo.component';
import { CmJugadoresComponent } from './cm-jugadores/cm-jugadores.component';

const routes: Routes = [
  {
    path: 'Equipos',
    component: CmAddEquipoComponent
  },
  {
    path: 'Jugadores',
    component:  CmJugadoresComponent
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
