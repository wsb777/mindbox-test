describe('todo spec', () => {

  beforeEach(function () {
    cy.viewport(1300,800);
    cy.visit('http://localhost:5173')
  })

  it('menu buttons', () => {
    cy.get('[data-cy="button-active"]').click()
    cy.get('[data-cy="checkbox"').find('input:checked').should('not.exist')
    cy.get('[data-cy="button-completed"]').click()
    cy.get('[data-cy="checkbox"').find('input:checked').should('exist')
    cy.get('[data-cy="button-all"]').click()
    cy.get('[data-cy="checkbox"').eq(0).find('input:checked').should('exist')
    cy.get('[data-cy="checkbox"').eq(1).find('input:checked').should('not.exist')
    cy.get('[data-cy="button-clear"]').click()
    cy.get('[data-cy="checkbox"').contains("Помыть").should('exist')
    cy.get('[data-cy="checkbox"').contains("Сделать").should('not.exist')
  })

  it('checkbox click', () => {
    cy.get('[data-cy="checkbox"').eq(0).find('label').click()
    cy.get('[data-cy="checkbox"').eq(0).find('input:checked').should('not.exist')
    cy.get('[data-cy="checkbox"').eq(1).find('label').click()
    cy.get('[data-cy="checkbox"').eq(1).find('input:checked').should('exist')
  })

  it('input field', () => {
    cy.get('[data-cy="input"]').type('Успешный тест').type('{enter}')
    cy.get('[data-cy="checkbox"').eq(2).contains('Успешный тест').should('exist')
    cy.get('[data-cy="checkbox"').eq(2).find('input:checked').should('not.exist')
  })
})