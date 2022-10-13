/// <reference types="Cypress" />
import projectsData from "../../../../fixtures/projectsData.json";

import { When, Then } from "cypress-cucumber-preprocessor/steps"
import {devices} from "../../../../apiObjects/Devices";

When(/^I request all devices$/, () => {
  devices.getAllRequests(projectsData[Cypress.env("projectName")].key)
})

Then(/^I get a successfully response$/, function () {

});
