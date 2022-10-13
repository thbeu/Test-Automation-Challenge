/// <reference types="Cypress" />
import projectsData from "../../../../fixtures/projectsData.json";

import {Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import {devices} from "../../../../apiObjects/Devices";
import projectData from "../../../../fixtures/projectsData.json";

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

});

Then(/^I validate that the device is created$/, function () {

});

Then(/^I can delete the created device$/, function () {

});
