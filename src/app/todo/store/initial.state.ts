import { TodoModel } from "../models";
import { TodoState } from "./todo.state";

export const initialState: TodoState = {
    todos: [
        new TodoModel('work'),
        new TodoModel('play'),
        new TodoModel('sleep')
    ]
}