import personalData from "../fixtures/personalData.json"
import projectsData from "../fixtures/projectsData.json"

import {utilsPage} from "./utils/Utils";
import {locatorsUtils} from "./utils/LocatorsUtils";
import {commonPagesUtils} from "./utils/CommonPagesUtils";


export default class ProjectOverviewPage {

  checkLandingInPage(){
    commonPagesUtils.validatePageBaseElements("Project Overview")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectsOverviewPageLocators.filterProjectPlaceholder, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectsOverviewPageLocators.projectOverviewCard, "be.visible")
      .should("have.length", projectsData.numberOfProjects*2) //the project container and the project name have similar locators
    this.validateProjectInformation(Cypress.env('projectName'))
  }

  validateProjectInformation(projectName) {
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectsOverviewPageLocators.projectOverviewNameByKey(projectsData[projectName].key),
      "be.visible").should('have.text', Cypress.env('projectName'))
    //Since we don't have a unique id for the project body, we use the project container in combination with the body class
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectsOverviewPageLocators.projectOverviewCardByKey(projectsData[projectName].key)
      + " " + locatorsUtils.projectsOverviewPageLocators.projectDescriptionBody,"be.visible")
      .should('have.text', projectsData[projectName].motivationSentence)
  }
}

export const projectOverviewPage = new ProjectOverviewPage()
