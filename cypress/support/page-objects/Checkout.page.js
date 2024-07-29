class CheckoutPage {
    visit() {
        cy.visit('/checkout-step-one.html')
    }

    getFirstNameInput() {
        return cy.get('[data-test="firstName"]')
    }

    getLastNameInput() {
        return cy.get('[data-test="lastName"]')
    }

    getPostalCodeInput() {
        return cy.get('[data-test="postalCode"]')
    }

    getContinueButton() {
        return cy.get('[data-test="continue"]')
    }

    getFinishButton() {
        return cy.get('[data-test="finish"]')
    }

    getErrorMessage() {
        return cy.get('[data-test="error"]')
    }

    getCompleteHeader() {
        return cy.get('.complete-header')
    }

    getBackToProductsButton() {
        return cy.get('[data-test="back-to-products"]')
    }

    fillCheckoutForm(firstName, lastName, postalCode) {
        this.getFirstNameInput().type(firstName)
        this.getLastNameInput().type(lastName)
        this.getPostalCodeInput().type(postalCode)
        this.getContinueButton().click()
    }

    completeCheckout() {
        this.getFinishButton().click()
    }

    verifyCheckoutComplete() {
        this.getCompleteHeader().should('contain', 'Thank you for your order')
    }

    clickBackToProducts() {
        this.getBackToProductsButton().click()
    }
}

export default new CheckoutPage()
