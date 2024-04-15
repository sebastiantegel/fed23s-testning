import { add, addTodo, toggleTodo } from "../main";
import { Todo } from "../models/Todo";

describe("Testing add", () => {
  test("it should add correctly", () => {
    // Assign
    const x = 10;
    const y = 20;
    let result = 0;

    // Act
    result = add(x, y);

    // Assert
    expect(result).toBe(30);
  });
});

describe("Testing todos", () => {
  test("it should add todo to list", () => {
    // Assign
    const theTodoText = "Spela mer golf";
    const tests: Todo[] = [];
    const lengthFromBeginning = tests.length;

    // Act
    addTodo(theTodoText, tests);

    // Assert
    expect(tests.length).toBe(lengthFromBeginning + 1);
    expect(tests[tests.length - 1].text).toBe(theTodoText);
    expect(tests[tests.length - 1].isDone).toBeFalsy();
  });

  test("it should not add empty todo", () => {
    // Assign
    const theTodoText = "";
    const todos: Todo[] = [];

    // Act
    addTodo(theTodoText, todos);

    // Assert
    expect(todos.length).toBe(0);
  });

  test("it should be marked as done correctly", () => {
    // Assign
    const theTodoText = "Lorem ipsum";
    const todos: Todo[] = [];
    addTodo(theTodoText, todos);

    // Act
    toggleTodo(0, todos);

    // Assert
    expect(todos[0].isDone).toBeTruthy();
  });
});
