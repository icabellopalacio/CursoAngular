import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tareas: Array<Todo>;
  itemToDo: Todo;
  constructor() { }

  ngOnInit() {
    this.tareas = [] ;
    this.itemToDo = new Todo('', false, false);
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
    tareaSel.terminado = !tareaSel.terminado;
  }

  setStyles(tareaSel: Todo): any {
    return {
      importante: tareaSel.importante,
      terminada: tareaSel.terminado
    };
  }
}
