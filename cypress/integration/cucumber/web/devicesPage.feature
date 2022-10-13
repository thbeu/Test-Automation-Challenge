Feature: Devices Page Feature

  As a user I want to manage my devices

  Background:
    Given I visit the homepage
    And I successfully login

  @parallel @smoke
  Scenario: Navigate to devices pages from project overview page
    When I navigate through project overview device button
    Then I load successfully the devices page

  @devices @smoke
  Scenario Outline: Create new active device - <typeOfSlot>
    Given I navigate to devices page
    When I deploy a new <typeOfSlot> device
    Then I successfully deployed a new device

    Examples:
      | typeOfSlot |
      | desktop    |
      | mobile     |

  Scenario Outline: Release active device - <typeOfSlot>
    Given I deploy a new <typeOfSlot> device and navigate to devices page
    When I release the active device
    Then I successfully release device

    Examples:
      | typeOfSlot |
      | desktop    |
      | mobile     |
