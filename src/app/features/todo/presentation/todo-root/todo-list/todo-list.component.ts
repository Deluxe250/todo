import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TodoAppService } from '@application/services';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  constructor(private appService: TodoAppService) {}

  ngOnInit(): void {
    this.appService.loadTodos();
  }

  check(todoId: string) {
    this.appService.checkTodo(todoId);
  }

  uncheck(todoId: string) {
    this.appService.uncheckTodo(todoId);
  }
}
