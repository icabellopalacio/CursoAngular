import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { PipeSinTerminarPipe } from './Pipes/pipe-sin-terminar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PipeSinTerminarPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
