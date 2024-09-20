import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {
  CheckTodoUsecase,
  LoadTodosUsecase,
  UncheckTodoUsecase,
} from '@application/usecases';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  constructor(
    private loadTodosUseCase: LoadTodosUsecase,
    private checkTodoUseCase: CheckTodoUsecase,
    private uncheckTodoUseCase: UncheckTodoUsecase
  ) {}

  ngOnInit(): void {
    this.loadTodosUseCase.execute();
  }

  check(todoId: string) {
    this.checkTodoUseCase.execute(todoId);
  }

  uncheck(todoId: string) {
    this.uncheckTodoUseCase.execute(todoId);
  }
}
