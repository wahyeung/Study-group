describe('Cart Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.login('standard_user', 'secret_sauce')
    })

    describe('Test case 1', () => {
        it('Open checkout and verify errors', () => {
            cy.get('[data-test="shopping-cart-link"]').click()
            cy.get('[data-test="checkout"]').click()
            cy.get('[data-test="continue"]').click()
            cy.get('[data-test="error"]').should('contain', 'Error: First Name is required')
        })
    })

    describe('Test case 2', () => {
        it('Verify cart is empty, add item, and complete checkout', () => {
            cy.get('[data-test ="shopping_cart_badge"]').should('not.exist')
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
            cy.get('.shopping_cart_badge').should('be.visible')
            cy.get('[data-test="shopping-cart-link"]').click()
            cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack')
            cy.get('.cart_quantity').should('contain', '1')
            cy.get('.inventory_item_price').should('contain', '$29.99')

            cy.get('[data-test="checkout"]').should('be.visible')
            cy.get('[data-test="continue-shopping"]').should('be.visible')
            cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')

            cy.get('[data-test="checkout"]').click()
            cy.get('[data-test="firstName"]').type('Luna')
            cy.get('[data-test="lastName"]').type('Lu')
            cy.get('[data-test="postalCode"]').type('12345')
            cy.get('[data-test="continue"]').click()
            cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack')
            cy.get('[data-test="finish"]').click()
            cy.get('.complete-header').should('contain', 'Thank you for your order')
            cy.url().should('include', '/checkout-complete.html') 
            cy.get('[data-test="back-to-products"]').click()
            cy.url().should('include', '/inventory.html')
            cy.get('[data-test ="shopping_cart_badge"]').should('not.exist')
        })
    })

    describe('Test case 3', () => {
        it('Add and remove item from cart', () => {
            cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
            cy.get('.shopping_cart_badge').should('be.visible').and('contain', '1')
            cy.get('.shopping_cart_link').click()
            cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
            cy.get('.shopping_cart_badge').should('not.exist')
        })
    })

    describe('Test case 4', () => {
        it('Continue shopping from cart', () => {
            cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
            cy.get('.shopping_cart_link').click()
            cy.get('[data-test="continue-shopping"]').click()
            cy.url().should('include', '/inventory.html')
            cy.get('.shopping_cart_badge').should('be.visible').and('contain', '1')
        })
    })


})