Feature: User Login 

    User Authentication

    Background:
        Given I visit the homepage

    @validCredentials
    Scenario: Login and logout
        Given I successfully login
        When I verify the success login in project overview page
        Then I can successfully logout
