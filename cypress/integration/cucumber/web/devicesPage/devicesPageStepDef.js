/// <reference types="Cypress" />
import responseMessages from "../../../../fixtures/responseMessages.json"
import projectsData from "../../../../fixtures/projectsData.json"


import {When, Then} from "cypress-cucumber-preprocessor/steps"
import {utilsPage} from "../../../../pageObjects/utils/Utils";
import {locatorsUtils} from "../../../../pageObjects/utils/LocatorsUtils";
import {homepage} from "../../../../pageObjects/Homepage";
import {projectOverviewPage} from "../../../../pageObjects/ProjectOverviewPage";
import {devicesPage} from "../../../../pageObjects/DevicesPage";

const {Given} = require("cucumber");

When(/^I navigate through project overview device button$/, () => {
  projectOverviewPage.navigateToDevicesPageFromProjectOverviewPage(Cypress.env("projectName"))
})

Then(/^I load successfully the devices page$/, () => {
  devicesPage.checkLandingInPage()
})

When(/^I deploy a new (.*) device$/, (typeOfSlot) => {
  utilsPage.clickOnElement(locatorsUtils.devicesPageLocators.deviceDeployByKey(projectsData[Cypress.env("projectName")][`${typeOfSlot}SlotId`]))
  utilsPage.waitUntilElementIsWithStatus(
    `${locatorsUtils.devicesPageLocators.projectAvailableDeploymentContent} ${locatorsUtils.devicesPageLocators.deployableGroup}`,
    "be.visible").then(deployableGroups => {
    const selected = utilsPage.getRandomNumberBetweenTwoValues(0, deployableGroups.length - 1)
    cy.wrap(deployableGroups).eq(selected).click()
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.devicesPageLocators.deployButton, "be.enabled").click()
  })
})

Then(/^I successfully deployed a new device$/, () => {
  devicesPage.checkLandingInPage()
  utilsPage.waitUntilElementIsWithStatus(locatorsUtils.devicesPageLocators.devicesInProjectList, "be.visible")
    .then(actualActiveDevices => {
      expect(actualActiveDevices.length).to.gt(0)
    })

})

Given(/^I deploy a new (.*) device and navigate to devices page$/, (typeOfSlot) => {
  //TODO create device via API
  projectOverviewPage.navigateToDevicesPageFromProjectOverviewPage(Cypress.env("projectName"))
})

When(/^I release the active device$/, () => {
  cy.get("@activeDevice").then( deviceID => {
    utilsPage.clickOnElement(locatorsUtils.devicesPageLocators.deleteActiveDeviceByKey(deviceID))
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.popUpLocators.popUp, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.popUpLocators.popUpCancelButton, "be.visible")
    utilsPage.clickOnElement(locatorsUtils.popUpLocators.popUpConfirmationButton)
  })
})

Then(/^I successfully release device$/, () => {

})
