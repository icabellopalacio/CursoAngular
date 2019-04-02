import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlumnoComponent } from './Controllers/add-alumno/add-alumno.component';
import { LstAlumnoComponent } from './Controllers/lst-alumno/lst-alumno.component';
import { AddCursoComponent } from './Controllers/add-curso/add-curso.component';
import { LstCursoComponent } from './Controllers/lst-curso/lst-curso.component';
import { AddInscripcionComponent } from './Controllers/add-inscripcion/add-inscripcion.component';
import { HeadComponent } from './Controllers/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAlumnoComponent,
    LstAlumnoComponent,
    AddCursoComponent,
    LstCursoComponent,
    AddInscripcionComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
