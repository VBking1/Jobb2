describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:5173/')


    cy.get('.ja-knapp').click()
    cy.contains("Jobb for deg og meg")
    cy.get('.ja-knapp').click()
    cy.screenshot()
    cy.get('.ja-knapp').click()
    
  })
})