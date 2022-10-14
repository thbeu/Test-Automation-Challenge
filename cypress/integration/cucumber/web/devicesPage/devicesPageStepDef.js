/// <reference types="Cypress" />
import projectsData from "../../../../fixtures/projectsData.json"

import {Given, Then, When} from "cypress-cucumber-preprocessor/steps"
import {utilsPage} from "../../../../pageObjects/utils/Utils";
import {locatorsUtils} from "../../../../pageObjects/utils/LocatorsUtils";
import {projectOverviewPage} from "../../../../pageObjects/ProjectOverviewPage";
import {devicesPage} from "../../../../pageObjects/DevicesPage";
import {devices} from "../../../../apiObjects/Devices";

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

Given(/^I deploy a new (.*) device and navigate to devices page$/, function (type, os) {
  devices.createDevice(projectsData[Cypress.env("projectName")].key, type, os)
  projectOverviewPage.navigateToDevicesPageFromProjectOverviewPage(Cypress.env("projectName"))
  //In this test we should have only 1 active device
  utilsPage.waitUntilElementIsWithStatus(locatorsUtils.devicesPageLocators.devicesInProjectList, "be.visible")
    .should("have.length", 1)
  utilsPage.waitUntilElementIsWithStatus(locatorsUtils.devicesPageLocators.deployedDeviceListCell, "be.visible")
    .should("have.length", 1)
})

When(/^I release the active device$/, () => {
  cy.get("@activeDeviceID").then(deviceID => {
    utilsPage.clickOnElement(locatorsUtils.devicesPageLocators.deleteActiveDeviceByKey(deviceID))
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.popUpLocators.popUp, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.popUpLocators.popUpCancelButton, "be.visible")
    utilsPage.clickOnElement(locatorsUtils.popUpLocators.popUpConfirmationButton)
  })
})

Then(/^I successfully release device$/, () => {
  cy.get(locatorsUtils.devicesPageLocators.devicesInProjectList).should("not.exist")
  cy.get(locatorsUtils.devicesPageLocators.deployedDeviceListCell).should("not.exist")
  utilsPage.waitUntilElementIsWithStatus(locatorsUtils.devicesPageLocators.deviceDeployButton, "be.visible")
    .should("have.length", projectsData[Cypress.env("projectName")].numberOfDevices)
})

//Descope cause of Cypress limitation
When(/^I access the active device$/, () => {
  cy.get("@activeDevice").then(deviceID => {
    utilsPage.clickOnElement(locatorsUtils.devicesPageLocators.accessDeviceButtonByKey(deviceID))
    utilsPage.clickOnElement(locatorsUtils.devicesPageLocators.accessDeviceButtonByKey("a703645c-d388-4256-af4f-733198b6da60"))
  })
})
