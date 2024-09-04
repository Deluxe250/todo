import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TodoModel } from '../models';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todos: TodoModel[];

  constructor() {
    this.todos = [
      new TodoModel('work'),
      new TodoModel('play'),
      new TodoModel('sleep')
    ];
  }

  toggleSelection(todo: TodoModel) {
    todo.done = !todo.done;
    console.log(this.todos);
  }
}
