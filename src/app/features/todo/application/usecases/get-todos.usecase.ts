import { Injectable } from '@angular/core';
import { TodoModel } from '@domain/models';
import { selectTodoList, TodoState } from '@infrastructure/store';
import { Store } from '@ngrx/store';
import { UseCase } from '@shared';
import { Observable } from 'rxjs';

@Injectable()
export class GetTodosUsecase implements UseCase<void, Observable<TodoModel[]>> {
  constructor(private store: Store<TodoState>) {}
  execute(): Observable<TodoModel[]> {
    return this.store.select(selectTodoList);
  }
}
