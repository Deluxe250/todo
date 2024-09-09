import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  CreateEffectMetadata,
  ofType,
} from '@ngrx/effects';
import { catchError, EMPTY, map, of, switchMap } from 'rxjs';
import { TodoModel } from '../models';
import { loadSuccess } from './todo.actions';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions) {
    this.loadTodos$ = createEffect(() =>
      this.actions$.pipe(
        ofType('[TodoList Component] Load'),
        switchMap(() =>
          of([
            new TodoModel({ title: 'work' }),
            new TodoModel({ title: 'play' }),
            new TodoModel({ title: 'sleep' }),
          ]).pipe(
            map(todos => loadSuccess({ todos })),
            catchError(() => EMPTY)
          )
        )
      )
    );
  }

  loadTodos$: CreateEffectMetadata;
}
