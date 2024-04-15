// import "./style.css";

import { Todo } from "./models/Todo";

export const add = (x: number, y: number) => {
  return x + y;
};

const todos: Todo[] = [];

export const addTodo = (theTask: string, theList: Todo[]) => {
  if (theTask.length > 0) {
    const newTodo = new Todo(theTask, false);
    theList.push(newTodo);
  } else {
    console.log("Detta får inte hända");
  }
};

export const toggleTodo = (i: number, theList: Todo[]) => {
  theList[i].isDone = !theList[i].isDone;
};

addTodo("Test", todos);
