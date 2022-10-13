import {utilsPage} from "./Utils";
import {locatorsUtils} from "./LocatorsUtils";
import personalData from "../../fixtures/personalData.json";
import projectsData from "../../fixtures/projectsData.json";

export default class CommonPagesUtils {

  validateTopBarElements() {
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.topBarLocators.webmateLogo, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.topBarLocators.helpDropdown, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.topBarLocators.userNotification, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.topBarLocators.configurePlan, "exist").then( configurePlan => {
      expect(configurePlan.attr("href"), "https://testfabrik.com/pricing/")
      expect(configurePlan.attr("target"), "_blank")
    })
    utilsPage.triggerMouseEnterElement(`${locatorsUtils.topBarLocators.topBar} ${locatorsUtils.commonLocators.userAvatar}`)
    utilsPage.getElementIfHaveStatus(locatorsUtils.commonLocators.tooltipText, 'exist').should('have.text', personalData.name)
  }

  validateSideBarElements() {
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.sideBarLocators.sideBar, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.sideBarLocators.deviceHome, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.sideBarLocators.deviceApps, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.sideBarLocators.testLabLink, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.sideBarLocators.devicesLink, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.sideBarLocators.repoLink, "be.visible")
  }

  validateProjectInformation(projectName) {
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.commonLocators.projectOverviewNameByKey(projectsData[projectName].key),
      "be.visible").should('have.text', Cypress.env('projectName'))
    //Since we don't have a unique id for the project body, we use the project container in combination with the body class
    utilsPage.waitUntilElementIsWithStatus(
      `${locatorsUtils.commonLocators.projectOverviewCardByKey(projectsData[projectName].key)} 
      ${locatorsUtils.commonLocators.projectDescriptionBody}`,
      "be.visible")
      .should('have.text', projectsData[projectName].motivationSentence)
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.commonLocators.projectLogo, "be.visible")
      .children().then( logo => {
      expect(logo.attr("src"), projectsData[projectName].logoSrc)
    })
  }
}

export const commonPagesUtils = new CommonPagesUtils()
