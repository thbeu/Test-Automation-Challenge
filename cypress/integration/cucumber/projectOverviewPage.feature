Feature: Project Overview Page Feature

  As a user I want to see all my projects overview

  Background:
    Given I visit the homepage
    And I successfully login

  Scenario: Validate project overview page elements
    Then I land in project overview page and validate all elements
