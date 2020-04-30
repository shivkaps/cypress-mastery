Feature: Feedback Submission

    As an logged in user
    I want to submit a feedback

    Background: Logging a tip
        Given I will run before all the scenarios


    Scenario: Submitting a feedback
        Given I open the feedback Page
        When I fill the feedback form
        And I submit the feedback form
        Then the feedback should be submitted
