class LandingPage {
    visit() {
        cy.visit('/')
    }

    getUsernameInput() {
        return cy.get('[data-test="username"]')
    }

    getPasswordInput() {
        return cy.get('[data-test="password"]')
    }

    getLoginButton() {
        return cy.get('[data-test="login-button"]')
    }

    getErrorMessage() {
        return cy.get('[data-test="error"]')
    }

    login(username, password) {
        this.getUsernameInput().type(username)
        this.getPasswordInput().type(password)
        this.getLoginButton().click()
    }

    getTitle() {
        return cy.title()
    }

    verifyUrl() {
        cy.url().should('eq', 'https://www.saucedemo.com/')
    }

    verifyLoginButtonVisible() {
        return cy.get('[data-test="login-button"]').should('be.visible')
    }
}

export default new LandingPage()
