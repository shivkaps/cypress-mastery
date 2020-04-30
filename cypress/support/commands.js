import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand({
	failureThreshold: 2.0,
	failureThresholdType: 'percent',
	customDiffConfig: { threshold: 0.0 },
	capture: 'viewport',
})

Cypress.Commands.add('isVisible', selector => {
	cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', selector => {
	cy.get(selector).should('not.be.visible')
})

Cypress.Commands.add('setViewport', size => {
	if (Cypress._.isArray(size)) {
		cy.viewport(size[0], size[1])
	} else {
		cy.viewport(size)
	}
})

Cypress.Commands.add('login', (username, password) => {
	cy.isVisible('#login_form')
	cy.get('#user_login').type(username)
	cy.get('#user_password').type(password)
	cy.get('.btn.btn-primary').click()
})
