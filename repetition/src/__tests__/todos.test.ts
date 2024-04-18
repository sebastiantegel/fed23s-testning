import * as htmlFunctions from "./../htmlFunctions";
import { Todo } from "../models/Todo";
import { addTodo, removeTodo, toggleTodo } from "../todos";

describe("Todos", () => {
  let mockedCreateHtml: jest.SpyInstance<void>;

  beforeEach(() => {
    mockedCreateHtml = jest.spyOn(htmlFunctions, "createHtml");
  });

  test("it should add a todo", () => {
    // Assign
    const todo: Todo = { text: "Lorem", done: false };
    const todos: Todo[] = [];

    // Act
    addTodo(todo, todos);

    // Assert
    expect(todos).toHaveLength(1);
    expect(mockedCreateHtml).toHaveBeenCalled();
  });

  test("it should not add an empty todo", () => {
    // Assign
    const todo: Todo = { text: "", done: false };
    const todos: Todo[] = [];

    // Act
    addTodo(todo, todos);

    // Assert
    expect(todos).toHaveLength(0);
    expect(mockedCreateHtml).toHaveBeenCalled();
  });

  test("it should remove a todo", () => {
    // Assign
    const todos: Todo[] = [
      { text: "Lorem", done: false },
      { text: "ipsum", done: false },
    ];
    const i = 1;

    // Act
    removeTodo(i, todos);

    // Assert
    expect(todos).toHaveLength(1);
    expect(todos[0].text).toBe("Lorem");
  });

  test("it should toggle a todo", () => {
    // Assign
    const todo: Todo = { text: "Lorem", done: false };

    // Act
    toggleTodo(todo);

    // Assert
    expect(todo.done).toBeTruthy();
  });
});
