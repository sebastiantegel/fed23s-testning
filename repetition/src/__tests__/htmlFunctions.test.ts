import { createHtml } from "../htmlFunctions";
import { Todo } from "../models/Todo";

describe("Html functions", () => {
  test("it should create html", () => {
    const todos: Todo[] = [
      { text: "Lorem", done: false },
      { text: "ipsum", done: true },
    ];

    document.body.innerHTML = `
        <ul id="todos"></ul>
    `;

    createHtml(todos);

    const liTags = document.querySelectorAll("li");
    expect(liTags).toHaveLength(2);
  });
});
