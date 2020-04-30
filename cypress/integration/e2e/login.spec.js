import navBar from '../../page-objects/components/navBar.js'
import loginPage from '../../page-objects/pages/loginPage.js'
import homePage from '../../page-objects/pages/homePage.js'

describe('Login Failed Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		navBar.clickSignIn()
	})

	it('should try to login with invalid credentials', () => {
		loginPage.loginUser('invalid-username', 'invalid-password')
	})

	it('should display an error message', () => {
		loginPage.displayErrorMessage()
	})
})

describe('Login Success Test', () => {
	before(() => {
		cy.visit(Cypress.env('url'))
		cy.get('#signin_button').click()
	})

	it('should try to login with valid credentials', () => {
		loginPage.loginUser('username', 'password')
	})

	it('should be successfully logged in', () => {
		homePage.checkAccountsInfo()
	})
})
