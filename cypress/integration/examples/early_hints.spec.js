// / <reference types="Cypress" />

context('Opening a page which uses early hints', () => {
  it('cy.reload() - reload the page', () => {
    cy.visit('http://localhost:3001')
    // cy.visit('http://localhost:3001', { failOnStatusCode: false })

    cy.reload()
    // reload the page without using the cache
    cy.reload(true)
  })
})
