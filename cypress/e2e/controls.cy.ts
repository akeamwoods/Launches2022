describe('Controls', () => {
  it('left button should be disabled on first load', () => {
    cy.visit('/');
    cy.get('[data-cy="left-button"]').should('be.disabled');
  });
});

export {};
