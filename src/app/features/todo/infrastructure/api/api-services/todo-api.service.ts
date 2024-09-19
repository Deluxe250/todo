import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodoDTO } from '../dtos';

@Injectable({
  providedIn: 'root',
})
export class TodoApiService {
  getTodos(): Observable<TodoDTO[]> {
    return of([
      { id: crypto.randomUUID(), title: 'work', done: false },
      { id: crypto.randomUUID(), title: 'play', done: false },
      { id: crypto.randomUUID(), title: 'sleep', done: false },
    ]);
  }
}
