import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './../todo/todo';

@Pipe({
  name: 'pipeSinTerminar',
  pure: false
})
export class PipeSinTerminarPipe implements PipeTransform {
  transform(lstTodos: Array<Todo>, Terminados: boolean): Array<Todo> {
      return lstTodos.filter(e => e.terminado === Terminados);
  }

}
