/// <reference types="cypress" />

Cypress.Commands.add('login', (user: string, password: string) => {
  cy.get('input[id="user"]').type(user);
  cy.get('input[id="password"]').type(password);

  cy.get('button[type="submit"]').click();
});
