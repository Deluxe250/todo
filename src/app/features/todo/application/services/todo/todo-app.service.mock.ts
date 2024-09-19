import { Injectable } from '@angular/core';
import { TodoModel } from '@domain/models';
import { Observable, of } from 'rxjs';
import { TodoAppService } from './todo-app.service';

@Injectable()
export class TodoAppServiceMock implements TodoAppService {
  todos$: Observable<TodoModel[]>;

  constructor() {
    this.todos$ = of([]);
  }

  loadTodos(): Observable<TodoModel[]> {
    return of([]);
  }

  checkTodo(): void {
    return;
  }

  uncheckTodo(): void {
    return;
  }
}
