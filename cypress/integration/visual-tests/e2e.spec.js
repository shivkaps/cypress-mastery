describe('E2E Visual Regression Home Page', () => {
	it('loading the home page', () => {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})

	it('full HD Layout for Home Page', () => {
		cy.setViewport([1920, 1080])
		cy.matchImageSnapshot()
	})
	it('iphone Layout for Home Page', () => {
		cy.setViewport('iphone-x')
		cy.matchImageSnapshot()
	})
})

describe('E2E Visual Regression Login Page', () => {
	it('clicking on signin button', () => {
		cy.get('#signin_button').click()
	})

	it('full HD Layout for Login Page', () => {
		cy.setViewport([1920, 1080])
		cy.matchImageSnapshot({
			failureThreshold: 1.0,
		})
	})
	it('iphone Layout for Login Page', () => {
		cy.setViewport('iphone-x')
		cy.matchImageSnapshot({
			failureThreshold: 1.0,
		})
	})
})

describe('E2E Visual Regression Login Page Details', () => {
	it('should fill in login details', () => {
		cy.get('#user_login').type('username')
		cy.get('#user_password').type('password')
		cy.get('#user_remember_me').click()
	})

	it('full HD Layout for Login Page Details', () => {
		cy.setViewport([1920, 1080])
		cy.matchImageSnapshot()
	})
	it('iphone Layout for Login Page Details', () => {
		cy.setViewport('iphone-x')
		cy.matchImageSnapshot()
	})
})

describe('E2E Visual Regression User Login', () => {
	it('should fill in login details', () => {
		cy.get('.btn.btn-primary').click()
	})

	it('full HD Layout for User Login', () => {
		cy.setViewport([1920, 1080])
		cy.matchImageSnapshot()
	})
	it('iphone Layout for User Login', () => {
		cy.setViewport('iphone-x')
		cy.matchImageSnapshot()
	})
})
