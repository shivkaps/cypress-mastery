import basePage from '../basePage'

export default class homePage extends basePage {
	static checkAccountsInfo() {
		cy.get('.offset2.span8').should('be.visible')
	}
}
