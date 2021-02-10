import TestIds from '../../src/lib/TestIds';

before(() => {
  cy.visit('http://localhost:1234');
});

describe('State', () => {
  it('Shoud have an initial state of setup', () => {
    cy.get(`[data-testid="${TestIds.button_ready}"]`).should(
      'have.text',
      'Ready'
    );
  });
  it('Transition to play on ready click', () => {
    cy.get(`[data-testid="${TestIds.button_ready}"]`).click();
    cy.get(`[data-testid="${TestIds.button_settings}"]`).should(
      'have.text',
      '⚙'
    );
  });
});
