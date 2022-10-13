/// <reference types="Cypress" />
import {Then, When} from "cypress-cucumber-preprocessor/steps"
import {projectOverviewPage} from "../../../pageObjects/ProjectOverviewPage";
import {utilsPage} from "../../../pageObjects/utils/Utils";
import {locatorsUtils} from "../../../pageObjects/utils/LocatorsUtils";
import projectsData from "../../../fixtures/projectsData.json"
import {projectDashboardPage} from "../../../pageObjects/ProjectDashboardPage";

When(/^I select the project by (.*)$/, function (typeOfSelection) {
  projectOverviewPage.navigateToProjectDashboard(typeOfSelection, Cypress.env("projectName"))
});

Then(/^I successfully land in project dashboard page and validate the elements$/, function () {
  projectDashboardPage.checkLandingInPage()
});

Then(/^I validate activity messages$/, function () {
  utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectDashboardPageLocators.activityEntries, "be.visible").wait(2000) //some wait for giving time to messages to load
  utilsPage.getElementIfHaveStatus(locatorsUtils.projectDashboardPageLocators.activityEntries, "be.visible")
    .children().should("have.length.at.least", 1)
})
