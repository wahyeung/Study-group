class HomePage {
    visit() {
        cy.visit('/inventory.html')
    }

    getMenuButton() {
        return cy.get('#react-burger-menu-btn')
    }

    getLogoutLink() {
        return cy.get('[data-test="logout-sidebar-link"]')
    }

    logout() {
        this.getMenuButton().click()
        this.getLogoutLink().click()
    }

    verifyUrl() {
        cy.url().should('include', '/inventory.html')
    }
}

export default new HomePage()
