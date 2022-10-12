Feature: User Login 

    As a user I want to be able to use the login functionality

    Background:
        Given I visit the homepage

    @validCredentials
    Scenario: Login and logout
        Given I successfully login
        When I land in project overview page
        Then I can successfully logout
