Cypress.Commands.add("getByData", function (selector) {
  return cy.get(`[data-test=${selector}]`);
});