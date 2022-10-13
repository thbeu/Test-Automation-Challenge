Feature: Project Overview Page Feature

  As a user I want to see my project dashboard

  Background:
    Given I visit the homepage
    And I successfully login

  Scenario Outline: Enter in project dashboard page by <typeOfSelection>
    When I select the project by <typeOfSelection>
    Then I successfully land in project dashboard page and validate the elements

    Examples:
      | typeOfSelection  |
      | project dropdown |
      | project name     |
      | project card     |
      | open button      |

    Scenario: Validate existence project activity messages
      When I select the project by project card
      Then I validate activity messages
