describe('Login Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    describe('Positive Tests', () => {
        it('Should successfully load the login page', () => {
            cy.title().should('eq', 'Swag Labs')
        })

        it('Should successfully login with valid credentials', () => {
            cy.get('[data-test="username"]').type('standard_user')
            cy.get('[data-test="password"]').type('secret_sauce')
            cy.get('[data-test="login-button"]').click()
            cy.url().should('include', '/inventory.html')
        })

        it('Should successfully logout', () => {
     
            cy.get('[data-test="username"]').type('standard_user')
            cy.get('[data-test="password"]').type('secret_sauce')
            cy.get('[data-test="login-button"]').click()
            cy.url().should('include', '/inventory.html')

         
            cy.get('#react-burger-menu-btn').click()
            cy.get('[data-test="logout-sidebar-link"]').click()
            cy.url().should('eq', 'https://www.saucedemo.com/')
            cy.get('[data-test="login-button"]').should('be.visible')
        })
    })

    describe('Negative Tests', () => {
        it('Should display error for invalid login', () => {
            cy.get('[data-test="username"]').type('123@example.com')
            cy.get('[data-test="password"]').type('secret_sauce')
            cy.get('[data-test="login-button"]').click()
            cy.url().should('eq', 'https://www.saucedemo.com/')
            cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
        })
    })
})
