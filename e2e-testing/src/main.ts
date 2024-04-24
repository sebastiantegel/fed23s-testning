import { Todo } from "./models/Todo";
import "./style.css";

const todos: Todo[] = [];

document.getElementById("todoForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoText = (document.getElementById("todoText") as HTMLInputElement)
    .value;

  if (todoText.length > 0) {
    const todo = new Todo(todoText);
    todos.push(todo);
  }

  createHtml(todos);
});

const createHtml = (todos: Todo[]) => {
  const todoList = document.getElementById("todoList") as HTMLUListElement;

  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const liTag = document.createElement("li");
    liTag.innerHTML = todos[i].text;

    if (todos[i].done) {
      liTag.classList.add("done");
    }

    liTag.addEventListener("click", () => {
      todos[i].done = !todos[i].done;
      createHtml(todos);
    });

    todoList.appendChild(liTag);
  }
};
