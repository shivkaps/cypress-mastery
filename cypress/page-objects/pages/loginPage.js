import basePage from '../basePage'

export default class loginPage extends basePage {
	static loginUser(username, password) {
		cy.login(username, password)
	}

	static clickForgetPasswordLink() {
		cy.contains('Forget your password').click()
	}

	static displayErrorMessage() {
		cy.get('.alert.alert-error').click()
	}
}
