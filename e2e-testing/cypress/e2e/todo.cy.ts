describe("Todos", () => {
  it("should add a todo", () => {
    cy.visit("http://localhost:5173/");
    cy.intercept("POST", "http://awesomeurl/*", {
      statusCode: 201,
    });

    cy.get("input#todoText").type("Golf{enter}");

    cy.get("#todoList > li")
      .should("have.length", 1)
      .should("have.text", "Golf");
  });

  it("should not add empty todos", () => {
    cy.visit("http://localhost:5173/");

    cy.get("button:first").should("have.text", "Spara").click();

    cy.get("ul > li").should("have.length", 0);
  });

  it("should toggle todo", () => {
    cy.visit("http://localhost:5173/");
    cy.intercept("POST", "http://awesomeurl/*", {
      statusCode: 201,
    });

    cy.get("input#todoText").type("Golf{enter}");

    cy.get("ul > li:first").should("not.have.class", "done");

    cy.get("ul > li:first").click();

    cy.get("ul > li:first").should("have.class", "done");
  });

  it("should get todos from api", () => {
    cy.intercept("http://awesomeurl*", {
      todos: [
        { id: 1, text: "Data from api 1", done: false },
        { id: 2, text: "Data from api 2", done: false },
        { id: 3, text: "Data from api 3", done: true },
      ],
    });

    cy.visit("http://localhost:5173/");

    cy.get("button#fetchData").click();

    cy.get("ul > li").should("have.length", 3);
    cy.get("ul > li:first").should("have.text", "Data from api 1");
  });

  it("should get an error when fetching", () => {
    cy.visit("http://localhost:5173/");

    cy.intercept("GET", "awesomeurl*", {
      statusCode: 500,
      body: {
        todos: [
          { id: 1, text: "Data from api 1", done: false },
          { id: 2, text: "Data from api 2", done: false },
          { id: 3, text: "Data from api 3", done: true },
        ],
      },
    });

    cy.get("button:last").click();

    cy.get("ul > li").should("have.length", 3);
  });

  it("should have the todo in the url", () => {
    cy.visit("http://localhost:5173/");

    cy.intercept("POST", "http://awesomeurl/*", {
      statusCode: 201,
    }).as("savetodo");

    const todoText = "lorem";

    cy.get("input#todoText").type(todoText + "{enter}");

    cy.wait("@savetodo").its("request.url").should("include", todoText);

    cy.get("ul > li").should("have.length", 1).should("have.text", todoText);
  });
});
