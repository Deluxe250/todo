import { Injectable } from '@angular/core';
import { TodoModel } from '@domain/models';
import { CheckTodoDomainService } from '@domain/services';
import { check, TodoState } from '@infrastructure/store';
import { Store } from '@ngrx/store';
import { UseCase } from '@shared';

@Injectable()
export class CheckTodoUsecase implements UseCase<TodoModel, void> {
  constructor(
    private service: CheckTodoDomainService,
    private store: Store<TodoState>
  ) {}

  execute(todo: TodoModel): void {
    const updatedTodo = this.service.checkTodo(todo);
    return this.store.dispatch(check({ todo: updatedTodo }));
  }
}
