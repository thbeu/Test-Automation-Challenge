import projectsData from "../fixtures/projectsData.json"

import {utilsPage} from "./utils/Utils";
import {locatorsUtils} from "./utils/LocatorsUtils";
import {commonPagesUtils} from "./utils/CommonPagesUtils";
import locatorsTextValue from "../fixtures/locatorsTextValue.json";

export default class ProjectDashboardPagePage {

  checkLandingInPage(){
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.commonLocators.pagesHeader, "be.visible")
      .should('have.text', locatorsTextValue.projectDashboardPageHeader)
    commonPagesUtils.validateTopBarElements()
    commonPagesUtils.validateSideBarElements()
    commonPagesUtils.validateProjectInformation(Cypress.env('projectName'))
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectDashboardPageLocators.projectInfoContainer, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectDashboardPageLocators.deviceSlotUtilizationInfoContainer, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectDashboardPageLocators.totalUsersNumberContainer, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectDashboardPageLocators.activeUsersContainer, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectDashboardPageLocators.devicesSlotOverviewContainer, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectDashboardPageLocators.projectActivityContainer, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectDashboardPageLocators.jobRunsContainer, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectDashboardPageLocators.refreshButton, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectDashboardPageLocators.deviceEntry, "be.visible")
      .should("have.length", projectsData[Cypress.env("projectName")].numberOfDevices)
  }
}

export const projectDashboardPage = new ProjectDashboardPagePage()
