Feature: Devices API

    As a user I want to handle my devices by API

    Scenario: Get all devices by API
        Given I request all devices
        Then I get a successfully response
