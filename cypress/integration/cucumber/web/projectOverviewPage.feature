Feature: Project Overview Page Feature

  As a user I want to see all my projects overview

  Background:
    Given I visit the homepage
    And I successfully login

  @parallel @smoke
  Scenario: Validate project overview page elements
    Then I land in project overview page and validate all elements

  @parallel @smoke
  Scenario: Filter existent project
    When I apply project filter
    Then I have the projects filtered

  @parallel @smoke
  Scenario: Filter non-existent project
    When I apply a non-existent project filter
    Then I have no project results

  @parallel @smoke
  Scenario: Clear non-existent project filter
    Given I apply a non-existent project filter
    When I clear the filter
    Then I see all the projects again
