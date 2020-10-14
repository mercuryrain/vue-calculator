describe('Mathematical operations:', () => {
  it('add numbers', () => {
    cy.visit('/');
    cy.get('.n5').click();
    cy.get('.add').click();
    cy.get('.n6').click();
    cy.get('.equals').click();
    cy.contains('.display', '11');
  });
  it('subtract numbers', () => {
    cy.visit('/');
    cy.get('.n5').click();
    cy.get('.subtract').click();
    cy.get('.n6').click();
    cy.get('.equals').click();
    cy.contains('.display', '-1');
  });
  it('multiply numbers', () => {
    cy.visit('/');
    cy.get('.n5').click();
    cy.get('.multiply').click();
    cy.get('.n6').click();
    cy.get('.equals').click();
    cy.contains('.display', '30');
  });
  it('divide numbers', () => {
    cy.visit('/');
    cy.get('.n6').click();
    cy.get('.divide').click();
    cy.get('.n3').click();
    cy.get('.equals').click();
    cy.contains('.display', '2');
  });
  it('change sign', () => {
    cy.visit('/');
    cy.get('.n6').click();
    cy.get('.changeSign').click();
    cy.contains('.display', '-6');
  });
  it('percent', () => {
    cy.visit('/');
    cy.get('.n1').click();
    cy.get('.n0').click();
    cy.get('.subtract').click();
    cy.get('.n1').click();
    cy.get('.n0').click();
    cy.get('.percent').click();
    cy.get('.equals').click();
    cy.contains('.display', '9');
  });
});
