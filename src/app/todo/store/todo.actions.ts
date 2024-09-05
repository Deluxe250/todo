import { createAction, props } from '@ngrx/store';
import { TodoModel } from '../models';

export const check = createAction('[TodoList Component] Check', props<{ todoId: string }>());
export const uncheck = createAction('[TodoList Component] Uncheck', props<{ todoId: string }>());