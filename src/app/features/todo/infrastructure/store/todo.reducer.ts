import { createReducer, on } from '@ngrx/store';
import { check, loadSuccess, uncheck } from './todo.actions';
import { initialState } from './initial.state';

export const todoReducer = createReducer(
  initialState,
  on(loadSuccess, (state, { todos }) => {
    return {
      ...state,
      todos: todos,
    };
  }),
  on(check, (state, { todo }) => ({
    ...state,
    todos: state.todos.map(t => (t.id === todo.id ? todo : t)),
  })),
  on(uncheck, (state, { todo }) => ({
    ...state,
    todos: state.todos.map(t => (t.id === todo.id ? todo : t)),
  }))
);
