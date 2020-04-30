describe('Basics of Visual Regression', () => {
	it('my first visual regression test', () => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.matchImageSnapshot()
	})

	it('my second visual regression test', () => {
		cy.get('#signin_button').click()
		cy.matchImageSnapshot({
			failureThreshold: 1.0,
		})
	})
})
