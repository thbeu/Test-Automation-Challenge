import personalData from "../fixtures/personalData.json"
import responseMessages from "../fixtures/responseMessages.json"

import {utilsPage} from "./utils/Utils";
import {locatorsUtils} from "./utils/LocatorsUtils";

export default class Homepage {

  verifyLandingInHomePage() {
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.emailField, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.passwordField, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.signInButton, "be.disabled")
  }

  verifyPasswordCanBeReset(status) {
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.resetPasswordField, "be.enabled")
      .should('be.empty')

    switch (status) {
      case 'empty':
        utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.resetPasswordButton, "be.enabled")
          .click()
        utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.resetPasswordErrorMessage, "be.visible")
          .should("have.text", responseMessages.resetPasswordEmptyField)
        break;
      case 'wrong':
        utilsPage.interceptPasswordResetRequest()
        utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.resetPasswordField, personalData.wrongEmail, 100)
        utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.resetPasswordButton, "be.enabled").click()
        utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.resetPasswordErrorMessage, "be.visible")
          .should("have.text", responseMessages.resetPasswordWrongField)
        utilsPage.waitForInterceptionOfAliasToOccur('@reset-request', responseMessages.resetPasswordWrongNetworkResponse)
        break;
      case 'right':
        utilsPage.interceptPasswordResetRequest()
        utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.resetPasswordField, personalData.email, 100)
        utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.resetPasswordButton, "be.enabled").click()
        utilsPage.waitForInterceptionOfAliasToOccur('@reset-request', JSON.parse(JSON.stringify({result: 'success'})))
        break;
    }
  }

  verifyUsageOfWrongCredentials(type) {
    switch (type) {
      case "email":
        utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.emailField, personalData.wrongEmail, 100)
        utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.passwordField, Cypress.env('password'), 100)
        break;
      case "password":
        utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.emailField, personalData.email, 100)
        utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.passwordField, `${Cypress.env('password')}pass`, 100)
        break;
      case "both":
        utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.emailField, personalData.wrongEmail, 100)
        utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.passwordField, `${Cypress.env('password')}pass`, 100)
        break;
    }
    utilsPage.clickOnElement(locatorsUtils.homepageLocators.signInButton)
  }
}

export const homepage = new Homepage()
