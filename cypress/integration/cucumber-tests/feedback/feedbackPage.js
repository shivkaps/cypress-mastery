const url = 'http://zero.webappsecurity.com/feedback.html'
const name = 'demo'
const email = 'demo'
const subject = 'demo'
const comment = 'demo'

class feedbackPage {
	static visitFeedbackPage() {
		cy.visit(url)
	}

	static fillFeedbackForm() {
		cy.get('#name').type(name)
		cy.get('#email').type(email)
		cy.get('#subject').type(subject)
		cy.get('#comment').type(comment)
	}

	static submitFeedback() {
		cy.get('.btn-signin.btn.btn-primary').click()
	}

	static checkFeedbackSubmission() {
		cy.get('.offset3.span6').contains('Thank you')
	}
}

export default feedbackPage
