import LandingPage from '../support/page-objects/Landing.page'
import HomePage from '../support/page-objects/Home-page'

describe('Login Test', () => {
    it('Test case 1', () => {
        LandingPage.visit()
        LandingPage.getTitle().should('eq', 'Swag Labs')
    })

    it('Test case 2', () => {
        LandingPage.visit()
        LandingPage.login('123@example.com', 'secret_sauce')
        LandingPage.verifyUrl()
        LandingPage.getErrorMessage().should('contain', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Test case 3', () => {
        LandingPage.visit()
        LandingPage.login('standard_user', 'secret_sauce')
        HomePage.verifyUrl()
    })

    it('Test case 0', () => {
        LandingPage.visit()
        LandingPage.login('standard_user', 'secret_sauce')
        HomePage.logout()
        LandingPage.verifyUrl()
        LandingPage.verifyLoginButtonVisible()
    })
})
