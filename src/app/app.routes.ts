import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/presentation/home/home.component';
import { TodoRootComponent } from './features/todo/presentation/todo-root/todo-root.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todo-list',
    component: TodoRootComponent,
  },
];
