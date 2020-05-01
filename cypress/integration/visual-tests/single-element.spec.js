const sizes = ['macbook-13', 'macbook-15', [1200, 800]]

describe('Loading website for Visual Regression', () => {
	it(`visit the website`, () => {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})
})

describe('Single Element Visual Regression', () => {
	it(`should match a single element on the page in resolution`, () => {
		cy.setViewport('macbook-13')
		cy.get('.disclaimer.span12').matchImageSnapshot()
	})
})

describe('Single Element Visual Regression', () => {
	sizes.forEach(size => {
		it(`should match a single element on the page in resolution ${size}`, () => {
			cy.setViewport(size)
			cy.get('.disclaimer.span12').matchImageSnapshot()
		})
	})
})
