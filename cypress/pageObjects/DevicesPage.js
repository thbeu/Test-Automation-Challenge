import projectsData from "../fixtures/projectsData.json"

import {utilsPage} from "./utils/Utils";
import {locatorsUtils} from "./utils/LocatorsUtils";
import {commonPagesUtils} from "./utils/CommonPagesUtils";
import locatorsTextValue from "../fixtures/locatorsTextValue.json";

export default class DevicesPage {

  checkLandingInPage(){
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.commonLocators.pagesHeader, "be.visible")
      .should('have.text', locatorsTextValue.devicesPageHeader)
    commonPagesUtils.validateTopBarElements()
    commonPagesUtils.validateSideBarElements()
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.devicesPageLocators.usedDevicesCheckbox, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.devicesPageLocators.useDevicesLabel, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.devicesPageLocators.appsButton, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.devicesPageLocators.reservationsButton, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.devicesPageLocators.fullDevicesContainer, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.devicesPageLocators.devicesInProjectContainer, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.devicesPageLocators.devicesInProjectHeader, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.devicesPageLocators.devicesSlotsInProjectContainer, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.devicesPageLocators.devicesSlotsInProjectHeader, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.devicesPageLocators.devicesSlotsInProjectList, "be.visible")
  }
}

export const devicesPage = new DevicesPage()
