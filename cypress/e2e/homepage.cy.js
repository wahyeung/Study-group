describe('Work.co homepage', () => {
    it('Test case 1', () => {
        cy.visit('https://work.co/')
        cy.title().should('eq', 'Work & Co | Digital Product Agency')
        cy.contains('We solve complex problems through design & technology')
    })

    it('Test case 2', () => {
        cy.visit('https://work.co/')
        cy.get('[data-test-id="global-menu-btn"]').click()
        cy.url().should('eq', 'https://work.co/grid') 
    })

    it('Test case 3', () => {
        cy.visit('https://work.co/')
        cy.get('[data-test-id="global-menu-btn"]').click()
        cy.get('[data-test-id="grid-select-clients-link"]').click()
        cy.url().should('eq', 'https://work.co/clients/')
      })

      it('Test case 4', () => {
        cy.visit('https://work.co/')
        cy.get('[data-test-id="global-menu-btn"]').click()
        cy.get('[data-test-id="grid-expertise-capabilities-link"]').click()
        cy.url().should('eq', 'https://work.co/company/')
      })
    

})