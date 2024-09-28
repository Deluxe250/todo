import { Injectable } from '@angular/core';
import { TodoModel } from '@domain/models';
import { TodoState, uncheck } from '@infrastructure/store';
import { Store } from '@ngrx/store';
import { UseCase } from '@shared';

@Injectable()
export class UncheckTodoUsecase implements UseCase<TodoModel, void> {
  constructor(private store: Store<TodoState>) {}

  execute(todo: TodoModel): void {
    return this.store.dispatch(uncheck({ todo }));
  }
}
