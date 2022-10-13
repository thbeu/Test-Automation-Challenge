/// <reference types="Cypress" />
import responseMessages from "../../../fixtures/responseMessages.json"


import { When, Then } from "cypress-cucumber-preprocessor/steps"
import {utilsPage} from "../../../pageObjects/utils/Utils";
import {locatorsUtils} from "../../../pageObjects/utils/LocatorsUtils";
import {homepage} from "../../../pageObjects/Homepage";
import {projectOverviewPage} from "../../../pageObjects/ProjectOverviewPage";
import {devicesPage} from "../../../pageObjects/DevicesPage";

When(/^I navigate through project overview device button$/, () => {
  projectOverviewPage.navigateToDevicesPag(Cypress.env("projectName"))
})

Then(/^I load successfully the devices page$/, () => {
  devicesPage.checkLandingInPage()
})
