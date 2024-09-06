import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TodoModel } from '../models';
import { Store } from '@ngrx/store';
import { TodoState } from '../store/todo.state';
import { check, uncheck } from '../store/todo.actions';
import { Observable } from 'rxjs';
import { selectTodoList } from '../store/todo.selector';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todos$: Observable<TodoModel[]>;

  constructor(private store: Store<TodoState>) {
    console.log(store);
    this.todos$ = store.select(selectTodoList);
    console.log(this.todos$);
  }

  check(todoId: string) {
    this.store.dispatch(check({ todoId }));
  }

  uncheck(todoId: string) {
    this.store.dispatch(uncheck({ todoId }));
  }
}
