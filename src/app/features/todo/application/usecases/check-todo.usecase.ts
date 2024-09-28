import { Injectable } from '@angular/core';
import { TodoModel } from '@domain/models';
import { check, TodoState } from '@infrastructure/store';
import { Store } from '@ngrx/store';
import { UseCase } from '@shared';

@Injectable()
export class CheckTodoUsecase implements UseCase<TodoModel, void> {
  constructor(private store: Store<TodoState>) {}

  execute(todo: TodoModel): void {
    return this.store.dispatch(check({ todo }));
  }
}
