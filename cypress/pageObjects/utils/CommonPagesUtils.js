import {utilsPage} from "./Utils";
import {locatorsUtils} from "./LocatorsUtils";
import personalData from "../../fixtures/personalData.json";

export default class CommonPagesUtils {

  validatePageBaseElements(header) {
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.commonLocators.pagesHeader, "be.visible").should('have.text', header)
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.commonLocators.helpDropdown, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.commonLocators.userNotification, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.commonLocators.configurePlan, "exist").then( configurePlan => {
      expect(configurePlan.attr("href"), "https://testfabrik.com/pricing/")
      expect(configurePlan.attr("target"), "_blank")
    })
    utilsPage.triggerMouseEnterElement(locatorsUtils.commonLocators.userAvatar)
    utilsPage.getElementIfHaveStatus(locatorsUtils.commonLocators.tooltipText, 'exist').should('have.text', personalData.name)
  }
}

export const commonPagesUtils = new CommonPagesUtils()
