import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/presentation/home/home.component';
import { TodoListComponent } from './features/todo/presentation/todo-list/todo-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todo-list',
    component: TodoListComponent,
  },
];
