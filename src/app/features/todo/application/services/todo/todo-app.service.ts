import { Injectable } from '@angular/core';
import { TodoModel } from '@domain/models';
import { Observable } from 'rxjs';

@Injectable()
export abstract class TodoAppService {
  abstract todos$: Observable<TodoModel[]>;
  abstract loadTodos(): Observable<TodoModel[]>;
  abstract checkTodo(todoId: string): void;
  abstract uncheckTodo(todoId: string): void;
}
