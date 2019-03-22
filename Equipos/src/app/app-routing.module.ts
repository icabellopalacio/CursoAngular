import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmAddEquipoComponent } from './cm-add-equipo/cm-add-equipo.component';
import { CmListEquiposComponent}  from './cm-list-equipos/cm-list-equipos.component'

const routes: Routes = [
  {
    path: 'Equipos',
    component: CmAddEquipoComponent
  },
  {
    path: 'Jugadores',
    component:  CmListEquiposComponent
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
