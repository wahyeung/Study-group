class CartPage {
    visit() {
        cy.visit('/cart.html')
    }

    clickCartIcon() {
        cy.get('[data-test="shopping-cart-link"]').click()
    }

    getCartBadge() {
        return cy.get('[data-test="shopping-cart-badge"]')
    }

    getCheckoutButton() {
        return cy.get('[data-test="checkout"]')
    }

    getContinueShoppingButton() {
        return cy.get('[data-test="continue-shopping"]')
    }

    getRemoveButton(itemName) {
        return cy.get(`[data-test="remove-${itemName}"]`)
    }

    getCartItemName() {
        return cy.get('.inventory_item_name')
    }

    getCartItemQuantity() {
        return cy.get('.cart_quantity')
    }

    getCartItemPrice() {
        return cy.get('.inventory_item_price')
    }

    addItemToCart(itemName) {
        cy.get(`[data-test="add-to-cart-${itemName}"]`).click()
    }

    continueToCheckout() {
        this.getCheckoutButton().click()
    }

    verifyCartBadgeNotExist() {
        this.getCartBadge().should('not.exist')
    }

    verifyCartBadgeVisible() {
        this.getCartBadge().should('be.visible').and('contain', '1')
    }

    verifyCartItemName(name) {
        this.getCartItemName().should('contain', name)
    }

    verifyCartItemQuantity(quantity) {
        this.getCartItemQuantity().should('contain', quantity)
    }

    verifyCartItemPrice(price) {
        this.getCartItemPrice().should('contain', price)
    }
}

export default new CartPage()
