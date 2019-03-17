import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CmAddEquipoComponent } from './cm-add-equipo/cm-add-equipo.component';
import { CmHeadEquiposComponent } from './cm-head-equipos/cm-head-equipos.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { TeamFilterPipe } from './Pipes/team-filter.pipe';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CmAddEquipoComponent,
    CmHeadEquiposComponent,
    TeamFilterPipe,
    JugadoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
