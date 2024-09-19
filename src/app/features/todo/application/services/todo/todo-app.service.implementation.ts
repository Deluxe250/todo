import { Injectable } from '@angular/core';
import { TodoModel } from '@domain/models';
import { TodoApiService } from '@infrastructure/api/api-services';
import { map, Observable } from 'rxjs';
import { TodoAppService } from './todo-app.service';
import { Store } from '@ngrx/store';
import { TodoState } from '@infrastructure/store/todo.state';
import { check, selectTodoList, uncheck } from '@infrastructure/store';

@Injectable()
export class TodoAppServiceImplementation implements TodoAppService {
  todos$: Observable<TodoModel[]>;

  constructor(
    private store: Store<TodoState>,
    private service: TodoApiService
  ) {
    this.todos$ = store.select(selectTodoList);
  }

  loadTodos(): Observable<TodoModel[]> {
    return this.service.getTodos().pipe(
      map(dtos =>
        dtos.map(
          dto =>
            new TodoModel({
              id: dto.id,
              title: dto.title,
              done: dto.done,
            })
        )
      )
    );
  }

  checkTodo(todoId: string): void {
    this.store.dispatch(check({ todoId }));
  }

  uncheckTodo(todoId: string): void {
    this.store.dispatch(uncheck({ todoId }));
  }
}
