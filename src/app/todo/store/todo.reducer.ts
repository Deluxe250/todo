import { createReducer, on } from '@ngrx/store';
import { check, loadSuccess, uncheck } from './todo.actions';
import { initialState } from './initial.state';
import { TodoModel } from '../models';

export const todoReducer = createReducer(
  initialState,
  on(loadSuccess, (state, { todos }) => {
    return {
      ...state,
      todos: todos,
    };
  }),
  on(check, (state, { todoId }) => ({
    ...state,
    todos: state.todos.map(t =>
      t.id === todoId ? new TodoModel(t.title, true) : t
    ),
  })),
  on(uncheck, (state, { todoId }) => ({
    ...state,
    todos: state.todos.map(t =>
      t.id === todoId ? new TodoModel(t.title, false) : t
    ),
  }))
);
