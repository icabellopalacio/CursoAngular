import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tareas: Array<Todo>;
  itemToDo: Todo;
  url: string;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.url = 'http://192.168.0.79:8080/todos';
    this.tareas = [] ;
    this.getTodos().subscribe(tareas => {
      console.log(tareas);
      this.tareas = tareas ;
    } );
    this.itemToDo = new Todo('', false, false);
  }

  getTodos(): Observable<Array<Todo>>{
    return this.httpClient.get<Array<Todo>>(this.url);
  }

  addToList() {
    if ( this.itemToDo.nombre !== '') {
      if (this.itemToDo.importante === true) {
       this.itemToDo.nombre = this.itemToDo.nombre + '--> Importante';
      } else {
       this.itemToDo.nombre = this.itemToDo.nombre + '--> No Importante';
      }
      this.tareas.push(this.itemToDo);
      this.itemToDo = new Todo('', false, false);
    }
  }

  terminarTarea(tareaSel: Todo) {
    tareaSel.terminada = !tareaSel.terminada;
  }

  setStyles(tareaSel: Todo): any {
    return {
      importante: tareaSel.importante,
      terminada: tareaSel.terminada
    };
  }
}
