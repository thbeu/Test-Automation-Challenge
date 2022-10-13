Feature: User Login 

    As a user I want to be able to use the login functionality

    Background:
        Given I visit the homepage

    Scenario: Login and logout
        Given I successfully login
        When I land in project overview page
        Then I can successfully logout

    Scenario Outline: Login with invalid credentials
        When I enter invalid <type> credentials
        Then I verify that an error message appears

        Examples:
        |type    |
        |email   |
        |password|
        |both    |

    Scenario Outline: Forgot password
        When I click on forgot password
        Then I can reset my password using <status> credentials

        Examples:
        |status|
        |empty |
        |wrong |
        |right |