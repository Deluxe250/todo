import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map, of } from 'rxjs';
import { TodoModel } from '../models';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[TodoList Component] Load'),
      exhaustMap(() =>
        of([
          new TodoModel('work'),
          new TodoModel('play'),
          new TodoModel('sleep'),
        ]).pipe(
          map(todos => ({ type: '[Todo API] Load Success', payload: todos })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
