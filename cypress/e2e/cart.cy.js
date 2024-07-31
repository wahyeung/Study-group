describe('Cart Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.login('standard_user', 'secret_sauce')
    })

    describe('Test case 1: Verify errors on empty checkout form submission', () => {
        it('Should display error on empty checkout form submission', () => {
            cy.get('.shopping_cart_link').click()
            cy.get('[data-test="checkout"]').click()
            cy.get('[data-test="continue"]').click()
            cy.get('[data-test="error"]').should('contain', 'Error: First Name is required')
        })
    })

    describe('Test case 2: Add item to cart and complete checkout', () => {
        it('Should add item to cart and complete checkout', () => {
            cy.get('.shopping_cart_badge').should('not.exist')
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
            cy.get('.shopping_cart_badge').should('be.visible')
            cy.get('.shopping_cart_link').click()
            cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
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
            cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
            cy.get('[data-test="finish"]').click()
            cy.get('.complete-header').should('contain', 'Thank you for your order')
            cy.url().should('include', '/checkout-complete.html')
            cy.get('[data-test="back-to-products"]').click()
            cy.url().should('include', '/inventory.html')
            cy.get('.shopping_cart_badge').should('not.exist')
        })
    })

    describe('Test case 3: Add and remove item from cart', () => {
        it('Should add and remove item from cart', () => {
            cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
            cy.get('.shopping_cart_badge').should('be.visible').and('contain', '1')
            cy.get('.shopping_cart_link').click()
            cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
            cy.get('.shopping_cart_badge').should('not.exist')
        })
    })

    describe('Test case 4: Continue shopping from cart', () => {
        it('Should continue shopping from cart', () => {
            cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
            cy.get('.shopping_cart_link').click()
            cy.get('[data-test="continue-shopping"]').click()
            cy.url().should('include', '/inventory.html')
            cy.get('.shopping_cart_badge').should('be.visible').and('contain', '1')
        })
    })
})
