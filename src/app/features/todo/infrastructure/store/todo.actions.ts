import { createAction, props } from '@ngrx/store';
import { TodoModel } from '../../domain/models';

export const check = createAction(
  '[TodoList Component] Check',
  props<{ todo: TodoModel }>()
);

export const uncheck = createAction(
  '[TodoList Component] Uncheck',
  props<{ todo: TodoModel }>()
);

export const load = createAction('[TodoList Component] Load');

export const loadSuccess = createAction(
  '[Todo API] Load Success',
  props<{ todos: TodoModel[] }>()
);

export const loadFail = createAction('[Todo API] Load Fail');
