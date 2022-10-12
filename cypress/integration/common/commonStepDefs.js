/// <reference types="Cypress" />

import {
  Given
} from "cypress-cucumber-preprocessor/steps";
import {utilsPage} from "../../pageObjects/utils/Utils";
import {locatorsUtils} from "../../pageObjects/utils/LocatorsUtils";
import {homepage} from "../../pageObjects/Homepage";

export default class commonStepDefs {
}

Given(/^I visit the homepage$/, () => {
  cy.visit(Cypress.env('url'))
  homepage.verifyLandingInHomePage()
});

And(/^I successfully login$/, () => {
  utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.emailField, Cypress.env('username'), 100)
  utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.passwordField, Cypress.env('password'), 100)
  utilsPage.clickOnElement(locatorsUtils.homepageLocators.signInButton)
  utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectsOverviewPageLocators.projectChooserDropdown, "be.visible")
});
