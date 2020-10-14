describe('Math operations', () => {
  it('Display set to zero', () => {
    cy.visit('/');
    cy.contains('.display', '0');
  });
});
