import { createAction, props } from '@ngrx/store';
import { TodoModel } from '../models';

export const check = createAction(
  '[TodoList Component] Check',
  props<{ todoId: string }>()
);

export const uncheck = createAction(
  '[TodoList Component] Uncheck',
  props<{ todoId: string }>()
);

export const load = createAction('[TodoList Component] Load');

export const loadSuccess = createAction(
  '[Todo API] Load Success',
  props<{ todos: TodoModel[] }>()
);

export const loadFail = createAction('[Todo API] Load Fail');
