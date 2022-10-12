/// <reference types="Cypress" />

import { When, Then } from "cypress-cucumber-preprocessor/steps"
import {utilsPage} from "../../../pageObjects/utils/Utils";
import {locatorsUtils} from "../../../pageObjects/utils/LocatorsUtils";
import {homepage} from "../../../pageObjects/Homepage";

When(/^I verify the success login in project overview page$/, function () {
  utilsPage.triggerMouseoverElement(locatorsUtils.commonLocators.userAvatar)
  //utilsPage.getElementIfHaveStatus(locatorsUtils.commonLocators.tooltipText, 'exist').should('have.text', "Ricardo Andrade")
});

Then(/^I can successfully logout$/, function () {
  utilsPage.clickOnElement(locatorsUtils.commonLocators.userAvatar)
  utilsPage.clickOnElement(locatorsUtils.commonLocators.signOutButton)
  homepage.veryfyLandingInHomePage()
});
