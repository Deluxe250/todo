import { Injectable } from '@angular/core';
import { TodoModel } from '@domain/models';
import { TodoApiService } from '@infrastructure/api/api-services';
import { loadSuccess, selectTodoList, TodoState } from '@infrastructure/store';
import { Store } from '@ngrx/store';
import { UseCase } from '@shared';
import { Observable, of } from 'rxjs';

@Injectable()
export class LoadTodosUsecase implements UseCase<void, void> {
  todos$: Observable<TodoModel[]> = of([]);

  constructor(
    private store: Store<TodoState>,
    private apiService: TodoApiService
  ) {
    this.todos$ = store.select(selectTodoList);
  }

  execute(): void {
    this.apiService
      .getTodos()
      .subscribe(todos => this.store.dispatch(loadSuccess({ todos })));
  }
}
