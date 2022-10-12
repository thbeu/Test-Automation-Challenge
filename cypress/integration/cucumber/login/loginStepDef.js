/// <reference types="Cypress" />

import { When, Then } from "cypress-cucumber-preprocessor/steps"
import {utilsPage} from "../../../pageObjects/utils/Utils";
import {locatorsUtils} from "../../../pageObjects/utils/LocatorsUtils";
import {homepage} from "../../../pageObjects/Homepage";
import {projectOverviewPage} from "../../../pageObjects/ProjectOverviewPage";

When(/^I land in project overview page$/, () => {
  projectOverviewPage.checkLandingInPage()
})

Then(/^I can successfully logout$/, function () {
  utilsPage.clickOnElement(locatorsUtils.commonLocators.userAvatar)
  utilsPage.clickOnElement(locatorsUtils.commonLocators.signOutButton)
  homepage.veryfyLandingInHomePage()
});
