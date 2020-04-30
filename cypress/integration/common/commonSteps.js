import { defineStep } from "cypress-cucumber-preprocessor/steps";

before(() => {
  cy.log("I am common and will run just before first scenario of *.feature ");
});

beforeEach(() => {
  cy.log("I am common and will run before each Scenario in *.feature");
});

defineStep("I will run before all the scenarios", (url) => {
  cy.log("I am testing BDD style using Cypress");
});

defineStep("the correct url {string} is loaded", (url) => {
  cy.url().should("include", url);
});

defineStep("the login page has loaded properly", () => {
  cy.get("h3").contains("Log in to ZeroBank");
});
