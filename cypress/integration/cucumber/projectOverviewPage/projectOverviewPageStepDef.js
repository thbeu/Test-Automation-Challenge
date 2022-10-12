/// <reference types="Cypress" />
import { Then, When } from "cypress-cucumber-preprocessor/steps"
import {projectOverviewPage} from "../../../pageObjects/ProjectOverviewPage";
import {utilsPage} from "../../../pageObjects/utils/Utils";
import {locatorsUtils} from "../../../pageObjects/utils/LocatorsUtils";
import projectsData from "../../../fixtures/projectsData.json"

Then(/^I land in project overview page and validate all elements$/, () => {
  projectOverviewPage.checkLandingInPage()
});

When(/^I apply project filter$/, function () {
  utilsPage.typeValueIntoElement(locatorsUtils.projectsOverviewPageLocators.filterProjectPlaceholder, Cypress.env("projectName"), 100)
});

Then(/^I have the projects filtered$/, function () {
  utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectsOverviewPageLocators.projectOverviewCard, "be.visible")
    .should("have.length", 2) //the project container and the project name have similar locators
  projectOverviewPage.validateProjectInformation(Cypress.env("projectName"))
});

When(/^I apply a non-existent project filter$/, function () {
  utilsPage.typeValueIntoElement(locatorsUtils.projectsOverviewPageLocators.filterProjectPlaceholder, "nonExistentXPTO", 100)
});

Then(/^I have no project results$/, function () {
  cy.get(locatorsUtils.projectsOverviewPageLocators.projectOverviewCard).should("not.exist")
  utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectsOverviewPageLocators.nonExistentResults, "be.visible")
    .should("have.text", projectsData.nonExistentResultsMessage)
});

When(/^I clear the filter$/, function () {
  utilsPage.clearValueFromElement(locatorsUtils.projectsOverviewPageLocators.filterProjectPlaceholder)
});

Then(/^I see all the projects again$/, function () {
  cy.get(locatorsUtils.projectsOverviewPageLocators.nonExistentResults).should("not.exist")
  utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectsOverviewPageLocators.filterProjectPlaceholder, "be.visible")
  utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectsOverviewPageLocators.projectOverviewCard, "be.visible")
    .should("have.length", projectsData.numberOfProjects*2) //the project container and the project name have similar locators
});
