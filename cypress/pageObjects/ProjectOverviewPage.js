import projectsData from "../fixtures/projectsData.json"

import {utilsPage} from "./utils/Utils";
import {locatorsUtils} from "./utils/LocatorsUtils";
import {commonPagesUtils} from "./utils/CommonPagesUtils";


export default class ProjectOverviewPage {

  checkLandingInPage(){
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.commonLocators.pagesHeader, "be.visible")
      .should('have.text', "Project Overview")
    commonPagesUtils.validateTopBarElements()
    commonPagesUtils.validateProjectInformation(Cypress.env('projectName'))
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectsOverviewPageLocators.filterProjectPlaceholder, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectsOverviewPageLocators.projectOverviewCard, "be.visible")
      .should("have.length", projectsData.numberOfProjects*2) //the project container and the project name have similar locators
  }

  navigateToProjectDashboard(typeOfSelection, projectName) {
    switch (typeOfSelection) {
      case "project dropdown":
        utilsPage.clickOnElement(locatorsUtils.projectsOverviewPageLocators.projectChooserDropdown)
        utilsPage.waitUntilElementIsWithStatus(locatorsUtils.commonLocators.projectDropdownByKey(projectsData[projectName].key))
          .should('have.text', ` ${projectName} `)
        utilsPage.clickOnElement(locatorsUtils.commonLocators.projectDropdownByKey(projectsData[projectName].key))
        break
      case "project name":
        utilsPage.clickOnElement(locatorsUtils.commonLocators.projectOverviewNameByKey(projectsData[projectName].key))
        break
      case "project card":
        utilsPage.clickOnElement(locatorsUtils.commonLocators.projectOverviewCardByKey(projectsData[projectName].key))
        break
      case "open button":
        utilsPage.triggerMouseEnterElement(locatorsUtils.commonLocators.projectOverviewCardByKey(projectsData[projectName].key))
        utilsPage.clickOnElement(locatorsUtils.commonLocators.projectOverviewOpenButtonByKey(projectsData[projectName].key))
        break
    }
  }
}

export const projectOverviewPage = new ProjectOverviewPage()
