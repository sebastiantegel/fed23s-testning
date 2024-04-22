import { createHtml } from "./htmlFunctions";
import { Todo } from "./models/Todo";
import "./style.css";
import { addTodo } from "./todos";

const todos: Todo[] = [];

window.onload = () => {
  createHtml(todos);
};

document.getElementById("todoForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = (document.getElementById("userInput") as HTMLInputElement)
    .value;

  const todo = new Todo(todoText, false);
  addTodo(todo, todos);
});
