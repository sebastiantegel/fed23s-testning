describe("Todos", () => {
  it("should add a todo", () => {
    cy.visit("http://localhost:5173/");

    cy.get("input#todoText").type("Golf{enter}");

    cy.get("#todoList > li")
      .should("have.length", 1)
      .should("have.text", "Golf");
  });

  it("should not add empty todos", () => {
    cy.visit("http://localhost:5173/");

    cy.get("button").should("have.text", "Spara").click();

    cy.get("ul > li").should("have.length", 0);
  });

  it("should toggle todo", () => {
    cy.visit("http://localhost:5173/");

    cy.get("input#todoText").type("Golf{enter}");

    cy.get("ul > li:first").should("not.have.class", "done");

    cy.get("ul > li:first").click();

    cy.get("ul > li:first").should("have.class", "done");
  });
});
