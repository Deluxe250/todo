import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodoDTO } from '../dtos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoApiService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<TodoDTO[]> {
    return this.http.get<TodoDTO[]>('initial-todos.json').pipe(
      map(todos =>
        todos.map(todo => {
          todo.id = crypto.randomUUID();
          return todo;
        })
      )
    );
  }
}
