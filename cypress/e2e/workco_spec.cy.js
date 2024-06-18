describe('Work.co homepage', () => {
  it('should have the correct headline', () => {
    cy.visit('https://work.co/')
    cy.contains('We solve complex problems through design & technology')
  })
})