describe('Login Test', ()=> {
    it('Test case 1', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq', 'Swag Labs')
    })

    it('Test case 2', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test = "username"]').type('123@example.com')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button').click()
        cy.url().should('eq','https://www.saucedemo.com/')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    })
    
    it('Test case 3', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test = "username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button').click()
        cy.url().should('include', '/inventory.html') 
    })
})