export class TodoModel {
    constructor(title: string, done?: boolean) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.done = done || false;
    }

    id: string;
    title: string;
    done: boolean;
}
