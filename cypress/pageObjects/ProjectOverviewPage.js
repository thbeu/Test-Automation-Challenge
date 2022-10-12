import personalData from "../fixtures/personalData.json"

import {utilsPage} from "./utils/Utils";
import {locatorsUtils} from "./utils/LocatorsUtils";


export default class ProjectOverviewPage {

  checkLandingInPage(){
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectsOverviewPageLocators.filterProjectPlaceholder, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.projectsOverviewPageLocators.projectOverviewCard, "be.visible")
    utilsPage.triggerMouseEnterElement(locatorsUtils.commonLocators.userAvatar)
    utilsPage.getElementIfHaveStatus(locatorsUtils.commonLocators.tooltipText, 'exist').should('have.text', personalData.name)
  }
}

export const projectOverviewPage = new ProjectOverviewPage()
