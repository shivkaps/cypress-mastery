const url = 'http://zero.webappsecurity.com/login.html'

class loginPage {
	static visitLoginPage() {
		cy.visit(url)
	}

	static fillUsername(username) {
		cy.get('#user_login').type(username)
	}

	static fillPassword(password) {
		cy.get('#user_password').type(password)
	}

	static submitLoginDetails() {
		cy.get('.btn.btn-primary').click()
	}

	static checkLoginFailure() {
		cy.get('.alert.alert-error').should('be.visible')
	}

	static checkLoginSuccess() {
		cy.get('.offset2.span8').should('be.visible')
	}
}

export default loginPage
