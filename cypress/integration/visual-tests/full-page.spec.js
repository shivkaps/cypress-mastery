const pages = ['http://example.com/']
const sizes = ['iphone-x', 'ipad-2', [1200, 800]]

describe('Full Page Visual Regression', () => {
	sizes.forEach(size => {
		pages.forEach(page => {
			it(`should match ${page} in resolution ${size}`, () => {
				let currentTime = new Date(Date.UTC(2020, 1, 1)).getDate()
				cy.clock(currentTime)
				cy.setViewport(size)
				cy.visit(page)
				cy.matchImageSnapshot()
			})
		})
	})
})
