import * as functions from "./../ts/functions";
import * as htmlFunctions from "../ts/htmlFunctions";
import { createNewTodo } from "../ts/main";
import { IAddResponse } from "../ts/models/IAddResponse";
import { Todo } from "../ts/models/todo";

describe("Testing", () => {
  let mockedAddTodo: jest.SpyInstance<IAddResponse>;
  let mockedCreateHtml: jest.SpyInstance<void>;
  let mockedDisplayError: jest.SpyInstance<void>;

  beforeEach(() => {
    mockedAddTodo = jest.spyOn(functions, "addTodo");
    mockedCreateHtml = jest.spyOn(htmlFunctions, "createHtml");
    mockedDisplayError = jest.spyOn(htmlFunctions, "displayError");
  });

  afterEach(() => {
    mockedAddTodo.mockReset();
    mockedCreateHtml.mockReset();
    mockedDisplayError.mockReset();
  });

  test("it should call createHtml", () => {
    const todos: Todo[] = [];
    const todoText = "Lorem";

    document.body.innerHTML = `
    <div id="app">
      <form id="newTodoForm">
        <div>
          <input type="text" id="newTodoText" />
          <button>Skapa</button>
          <button type="button" id="clearTodos">Rensa lista</button>
        </div>
        <div id="error" class="error"></div>
      </form>
      <ul id="todos" class="todo"></ul>
    </div>
    `;

    mockedAddTodo.mockImplementation(() => {
      return { success: true, error: "" };
    });

    createNewTodo(todoText, todos);

    expect(mockedCreateHtml).toHaveBeenCalled();
  });

  test("it should call displayError", () => {
    const todos: Todo[] = [];
    const todoText = "Lorem";

    document.body.innerHTML = `
    <div id="app">
      <form id="newTodoForm">
        <div>
          <input type="text" id="newTodoText" />
          <button>Skapa</button>
          <button type="button" id="clearTodos">Rensa lista</button>
        </div>
        <div id="error" class="error"></div>
      </form>
      <ul id="todos" class="todo"></ul>
    </div>
    `;

    mockedAddTodo.mockImplementation(() => {
      return { success: false, error: "Hej hej" };
    });

    createNewTodo(todoText, todos);

    expect(mockedDisplayError).toHaveBeenCalled();
  });
});
