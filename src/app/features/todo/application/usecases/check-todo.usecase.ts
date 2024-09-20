import { Injectable } from '@angular/core';
import { check, TodoState } from '@infrastructure/store';
import { Store } from '@ngrx/store';
import { UseCase } from '@shared';

@Injectable()
export class CheckTodoUsecase implements UseCase<string, void> {
  constructor(private store: Store<TodoState>) {}

  execute(todoId: string): void {
    return this.store.dispatch(check({ todoId }));
  }
}
