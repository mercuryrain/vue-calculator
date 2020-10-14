describe('Reset button does', () => {
  it('clears value', () => {
    cy.visit('/');
    cy.get('.n5').click();
    cy.get('.n5').click();
    cy.contains('.display', '55');
    cy.get('.reset').click();
    cy.contains('.display', '0');
  });
});
