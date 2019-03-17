import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmAddEquipoComponent } from './cm-add-equipo/cm-add-equipo.component';
import { JugadoresComponent } from './Jugadores/jugadores.component';

const routes: Routes = [];

const appRoutes: Routes = [
  {
    path: 'Equipos',
    component: CmAddEquipoComponent
  },
  {
    path: 'Jugadores',
    component: JugadoresComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
