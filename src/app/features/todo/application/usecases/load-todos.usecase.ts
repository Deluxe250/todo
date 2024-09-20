import { Injectable } from '@angular/core';
import { TodoModel } from '@domain/models';
import { UseCase } from '@shared/use-case.interface';
import { Observable, of } from 'rxjs';

@Injectable()
export class LoadTodosUsecase implements UseCase<void, TodoModel[]> {
  execute(): Observable<TodoModel[]> {
    return of([]);
  }
}
