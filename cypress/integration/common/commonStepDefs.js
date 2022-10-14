/// <reference types="Cypress" />

import {Before, Given} from "cypress-cucumber-preprocessor/steps";
import {utilsPage} from "../../pageObjects/utils/Utils";
import {locatorsUtils} from "../../pageObjects/utils/LocatorsUtils";
import {homepage} from "../../pageObjects/Homepage";
import {projectOverviewPage} from "../../pageObjects/ProjectOverviewPage";
import {devicesPage} from "../../pageObjects/DevicesPage";
import {devices} from "../../apiObjects/Devices";
import projectsData from "../../fixtures/projectsData.json";

export default class commonStepDefs {
}

Before({tags: '@devices'}, () => {
  cy.log('Clear active devices');
  const projectKey = projectsData[Cypress.env("projectName")].key
  devices.getAllDevices(projectKey, "allDevices")
  cy.get("@allDevices").each( deviceID => {
    cy.log("Deleting active device: " + deviceID)
    devices.deleteDevice(deviceID)
  })
});

Given(/^I visit the homepage$/, () => {
  cy.visit(Cypress.env('url'))
  homepage.verifyLandingInHomePage()
});

And(/^I successfully login$/, () => {
  utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.emailField, Cypress.env('username'))
  utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.passwordField, Cypress.env('password'))
  utilsPage.clickOnElement(locatorsUtils.homepageLocators.signInButton)
  utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectsOverviewPageLocators.projectChooserDropdown, "be.visible")
});

Given(/^I navigate to devices page$/, () => {
  projectOverviewPage.navigateToDevicesPageFromProjectOverviewPage(Cypress.env("projectName"))
  devicesPage.checkLandingInPage()
})

