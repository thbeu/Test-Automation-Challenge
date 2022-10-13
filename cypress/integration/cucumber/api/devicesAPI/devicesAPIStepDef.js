/// <reference types="Cypress" />
import projectsData from "../../../../fixtures/projectsData.json";

import { When, Then } from "cypress-cucumber-preprocessor/steps"
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
