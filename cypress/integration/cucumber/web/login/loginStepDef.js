/// <reference types="Cypress" />
import responseMessages from "../../../../fixtures/responseMessages.json"

import { When, Then } from "cypress-cucumber-preprocessor/steps"
import {utilsPage} from "../../../../pageObjects/utils/Utils";
import {locatorsUtils} from "../../../../pageObjects/utils/LocatorsUtils";
import {homepage} from "../../../../pageObjects/Homepage";
import {projectOverviewPage} from "../../../../pageObjects/ProjectOverviewPage";

When(/^I land in project overview page$/, () => {
  projectOverviewPage.checkLandingInPage()
})

Then(/^I can successfully logout$/, function () {
  utilsPage.clickOnElement(locatorsUtils.commonLocators.userAvatar)
  utilsPage.clickOnElement(locatorsUtils.topBarLocators.signOutButton)
  homepage.verifyLandingInHomePage()
});

When(/^I click on forgot password$/, function () {
  utilsPage.clickOnElement(locatorsUtils.homepageLocators.forgotPassword)
});

Then(/^I can reset my password using (.*) credentials$/, function (status) {
  homepage.verifyPasswordCanBeReset(status)
});

When(/^I enter invalid (.*) credentials$/, function (type) {
  homepage.verifyUsageOfWrongCredentials(type)
});

Then(/^I verify that an error message appears$/, function () {
  utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.loginErrorMessage)
    .should('have.text', responseMessages.responseFailedLogin)
});

When(/^I click on sign up$/, function () {
  utilsPage.clickOnElement(locatorsUtils.homepageLocators.signUpLink)
});

Then(/^I can register a new user using (.*) credentials$/, function (type) {
  homepage.verifySignUpOfNewUser(type)
});
