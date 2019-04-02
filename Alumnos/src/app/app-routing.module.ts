import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddAlumnoComponent} from './Controllers/add-alumno/add-alumno.component';
import {AddCursoComponent} from './Controllers/add-curso/add-curso.component';
import {AddInscripcionComponent} from './Controllers/add-inscripcion/add-inscripcion.component';

const routes: Routes = [{
  path: 'Alumnos',
  component: AddAlumnoComponent
},
{
  path: 'Cursos',
  component: AddCursoComponent
},
{
  path: 'Inscripcion',
  component: AddInscripcionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
