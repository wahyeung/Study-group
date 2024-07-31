import LandingPage from '../support/page-objects/Landing.page.js'
import CartPage from '../support/page-objects/Cart.page.js'
import CheckoutPage from '../support/page-objects/Checkout.page.js'

describe('Cart Test', () => {
    beforeEach(() => {
        LandingPage.visit()
        LandingPage.login('standard_user', 'secret_sauce')
    })

    describe('Test case 1', () => {
        it('Open checkout and verify errors', () => {
            CartPage.clickCartIcon()
            CartPage.continueToCheckout()
            CheckoutPage.getContinueButton().click()
            CheckoutPage.getErrorMessage().should('contain', 'Error: First Name is required')
        })
    })

    describe('Test case 2', () => {
        it('Verify cart is empty, add item, and complete checkout', () => {
            CartPage.verifyCartBadgeNotExist()
            CartPage.addItemToCart('sauce-labs-backpack')
            CartPage.verifyCartBadgeVisible()
            CartPage.clickCartIcon()
            CartPage.verifyCartItemName('Sauce Labs Backpack')
            CartPage.verifyCartItemQuantity('1')
            CartPage.verifyCartItemPrice('$29.99')
            CartPage.getCheckoutButton().should('be.visible')
            CartPage.getContinueShoppingButton().should('be.visible')
            CartPage.getRemoveButton('sauce-labs-backpack').should('be.visible')
            CartPage.continueToCheckout()
            CheckoutPage.fillCheckoutForm('Luna', 'Lu', '12345')
            CartPage.verifyCartItemName('Sauce Labs Backpack')
            CheckoutPage.completeCheckout()
            CheckoutPage.verifyCheckoutComplete()
            cy.url().should('include', '/checkout-complete.html')
            CheckoutPage.clickBackToProducts()
            cy.url().should('include', '/inventory.html')
            CartPage.verifyCartBadgeNotExist()
        })
    })

    describe('Test case 3', () => {
        it('Add and remove item from cart', () => {
            CartPage.addItemToCart('sauce-labs-bike-light')
            CartPage.verifyCartBadgeVisible()
            CartPage.clickCartIcon()
            CartPage.getRemoveButton('sauce-labs-bike-light').click()
            CartPage.verifyCartBadgeNotExist()
        })
    })

    describe('Test case 4', () => {
        it('Continue shopping from cart', () => {
            CartPage.addItemToCart('sauce-labs-bike-light')
            CartPage.clickCartIcon()
            CartPage.getContinueShoppingButton().click()
            cy.url().should('include', '/inventory.html')
            CartPage.verifyCartBadgeVisible()
        })
    })
})
