/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/form");
  });

  it("displays two todo items by default", () => {
    cy.get("button").click();
  });
});
