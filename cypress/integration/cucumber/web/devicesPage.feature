Feature: Devices Page Feature

  As a user I want to manage my devices

  Background:
    Given I visit the homepage
    And I successfully login

  Scenario: Navigate to devices pages from project overview page
    When I navigate through project overview device button
    Then I load successfully the devices page


