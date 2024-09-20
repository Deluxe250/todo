import { Injectable } from '@angular/core';
import { TodoModel } from '@domain/models';
import { TodoApiService } from '@infrastructure/api/api-services';
import { UseCase } from '@shared';
import { Observable } from 'rxjs';

@Injectable()
export class LoadTodosUsecase
  implements UseCase<void, Observable<TodoModel[]>>
{
  constructor(private apiService: TodoApiService) {}
  execute(): Observable<TodoModel[]> {
    return this.apiService.getTodos();
  }
}
