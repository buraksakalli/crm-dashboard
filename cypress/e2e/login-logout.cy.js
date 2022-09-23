/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('.type() - type email', () => {
    cy.get('#email').type('test@test.com').should('have.value', 'test@test.com');
    cy.get('#password').type('test').should('have.value', 'test');

    cy.contains('Login').click();
    cy.wait(1000);
    cy.contains('Logout').click();
  });
});
