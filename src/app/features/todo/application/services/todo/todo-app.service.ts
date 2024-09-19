import { Injectable } from '@angular/core';
import { TodoModel } from '@domain/models';
import { TodoApiService } from '@infrastructure/api/api-services';
import { map, Observable } from 'rxjs';

@Injectable()
export class TodoAppService {
  constructor(private service: TodoApiService) {}

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
}
