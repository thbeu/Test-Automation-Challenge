Feature: Project Overview Page Feature

  As a user I want to see my project dashboard

  Background:
    Given I visit the homepage
    And I successfully login

  Scenario Outline: Enter in project dashboard by <typeOfSelection>
    Given I select the project by <typeOfSelection>
    Then I successfully land in project dashboard page

    Examples:
      | typeOfSelection   |
      | project dropdown  |
      | project name      |
      | project container |
      | open button       |
