import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TodoModel } from '../../domain/models';
import { Store } from '@ngrx/store';
import { TodoState } from '../../infrastructure/store/todo.state';
import { check, load, uncheck } from '../../infrastructure/store/todo.actions';
import { Observable } from 'rxjs';
import { selectTodoList } from '../../infrastructure/store/todo.selectors';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todos$: Observable<TodoModel[]>;

  constructor(private store: Store<TodoState>) {
    this.todos$ = store.select(selectTodoList);
  }
  ngOnInit(): void {
    this.store.dispatch(load());
  }

  check(todoId: string) {
    this.store.dispatch(check({ todoId }));
  }

  uncheck(todoId: string) {
    this.store.dispatch(uncheck({ todoId }));
  }
}
