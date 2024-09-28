import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {
  CheckTodoUsecase,
  GetTodosUsecase,
  LoadTodosUsecase,
  UncheckTodoUsecase,
} from '@application/usecases';
import { TodoModel } from '@domain/models';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todos$: Observable<TodoModel[]>;
  constructor(
    private loadTodosUseCase: LoadTodosUsecase,
    private getTodosUseCase: GetTodosUsecase,
    private checkTodoUseCase: CheckTodoUsecase,
    private uncheckTodoUseCase: UncheckTodoUsecase
  ) {
    this.todos$ = of([]);
  }

  ngOnInit(): void {
    this.todos$ = this.getTodosUseCase.execute();
    this.loadTodosUseCase.execute();
  }

  check(todo: TodoModel) {
    this.checkTodoUseCase.execute(todo);
  }

  uncheck(todo: TodoModel) {
    this.uncheckTodoUseCase.execute(todo);
  }
}
