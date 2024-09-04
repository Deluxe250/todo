export class TodoModel {
    constructor(title: string) {
        this.title = title;
        this.done = false;
    }
    title: string;
    done: boolean;
}
