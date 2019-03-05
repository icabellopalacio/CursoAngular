import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmAddEquipoComponent } from './cm-add-equipo/cm-add-equipo.component';
import { CmListEquiposComponent } from './cm-list-equipos/cm-list-equipos.component';
import { CmHeadEquiposComponent } from './cm-head-equipos/cm-head-equipos.component';

@NgModule({
  declarations: [
    AppComponent,
    CmAddEquipoComponent,
    CmListEquiposComponent,
    CmHeadEquiposComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
