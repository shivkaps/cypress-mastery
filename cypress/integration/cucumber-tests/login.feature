Feature: Login to Application

    As an invalid user
    I cannot log in to the Application

    As a valid user
    I want to log in to the Application

    Background: Logging a tip
        Given I will run before all the scenarios

    Scenario: Invalid Login
        Given I open the login Page
        And the correct url "login.html" is loaded
        And the login page has loaded properly
        When I enter a username "invalid-username"
        And I enter a password "invalid-password"
        And I click the sign-in button
        Then I should not be able to login

    Scenario: Valid Login
        Given I open the login Page
        And the correct url "login.html" is loaded
        And the login page has loaded properly
        When I enter a username "username"
        And I enter a password "password"
        And I click the sign-in button
        Then I should be able to login

