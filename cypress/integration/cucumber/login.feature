Feature: User Login 

    User Authentication

    Background:
        Given I visit the homepage
        And I successfully login

    @validCredentials
    Scenario: Login with valid credentials
    Given I open Login Page
