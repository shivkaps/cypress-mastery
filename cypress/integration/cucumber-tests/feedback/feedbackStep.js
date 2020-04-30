import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import feedbackPage from './feedbackPage'

Given('I open the feedback Page', () => {
	feedbackPage.visitFeedbackPage()
})

When('I fill the feedback form', () => {
	feedbackPage.fillFeedbackForm()
})

And('I submit the feedback form', () => {
	feedbackPage.submitFeedback()
})

Then('the feedback should be submitted', () => {
	feedbackPage.checkFeedbackSubmission()
})
