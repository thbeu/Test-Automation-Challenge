/// <reference types="Cypress" />
import projectsData from "../../../../fixtures/projectsData.json";

import {Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import {devices} from "../../../../apiObjects/Devices";
import projectData from "../../../../fixtures/projectsData.json";
import {utils} from "../../../../apiObjects/utils/Utils";

When(/^I request all devices$/, () => {
  devices.getAllDevices(projectsData[Cypress.env("projectName")].key, 'getDevices')
})

Then(/^I get a successfully response$/, function () {
  cy.get('@getDevices').then((body) => {
    expect(JSON.stringify(body).split(',').length).equal(parseInt(projectData[Cypress.env('projectName')].numberOfDevices))
  })
});

Given(/^I create a new (.*) device from (.*)$/, function (type, os) {
  devices.createDevice(projectsData[Cypress.env("projectName")].key, type, os)
});

When(/^I get all devices$/, function () {
  devices.getAllDevices(projectsData[Cypress.env("projectName")].key, 'allDevices')
});

Then(/^I validate that (.*) device is created$/, function (type) {
  devices.verifyDeviceIdBySlotIdIsRunning(type)
});

And(/^I can delete the created device$/, function () {
  cy.get('@deviceIdOfSlotId').then((deviceId) => {
    devices.deleteDevice(deviceId)
  })
});
