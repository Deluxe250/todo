import { Injectable } from '@angular/core';
import { TodoModel } from '@domain/models';

@Injectable()
export class CheckTodoDomainService {
  checkTodo(todo: TodoModel): TodoModel {
    return new TodoModel({ id: todo.id, title: todo.title, done: true });
  }

  uncheckTodo(todo: TodoModel): TodoModel {
    return new TodoModel({ id: todo.id, title: todo.title, done: false });
  }
}
