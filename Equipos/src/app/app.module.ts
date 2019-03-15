import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CmAddEquipoComponent } from './cm-add-equipo/cm-add-equipo.component';
import { CmHeadEquiposComponent } from './cm-head-equipos/cm-head-equipos.component';
import { TeamFilterPipe } from './Pipes/team-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CmAddEquipoComponent,
    CmHeadEquiposComponent,
    TeamFilterPipe
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
