Feature: Devices API

  As a user I want to handle my devices by API

  @smoke
  Scenario Outline: Create and delete a new <type> device from <os>
    Given I create a new <type> device from <os>
    When I get all devices
    Then I validate that <type> device is created
    And I can delete the created device

    Examples:
      | type    | os      |
      | desktop | windows |
      | mobile  | ios     |
      | mobile  | android |
