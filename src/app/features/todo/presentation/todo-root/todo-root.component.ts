import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import * as UseCases from '@application/usecases';
import * as DomainServices from '@domain/services';

@Component({
  selector: 'app-todo-root',
  standalone: true,
  imports: [CommonModule, TodoListComponent],
  providers: [Object.values(UseCases), Object.values(DomainServices)],
  templateUrl: './todo-root.component.html',
  styleUrl: './todo-root.component.scss',
})
export class TodoRootComponent {}
