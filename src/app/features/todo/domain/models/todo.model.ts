export class TodoModel {
  constructor(init: Partial<TodoModel>) {
    this.id = init.id || crypto.randomUUID();
    this.title = init.title || '';
    this.done = init.done || false;
  }

  id: string;
  title: string;
  done: boolean;
}
