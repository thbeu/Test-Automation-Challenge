import personalData from "../fixtures/personalData.json"
import responseMessages from "../fixtures/responseMessages.json"
import locatorsTextValue from "../fixtures/locatorsTextValue.json"
import {fail} from "assert";
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
        utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.resetPasswordField, personalData.wrongEmail)
        utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.resetPasswordButton, "be.enabled").click()
        utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.resetPasswordErrorMessage, "be.visible")
          .should("have.text", responseMessages.resetPasswordWrongField)
        utilsPage.waitForInterceptionOfAliasToOccur('@reset-request', responseMessages.resetPasswordWrongNetworkResponse)
        break;
      case 'right':
        utilsPage.interceptPasswordResetRequest()
        utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.resetPasswordField, personalData.email)
        utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.resetPasswordButton, "be.enabled").click()
        utilsPage.waitForInterceptionOfAliasToOccur('@reset-request', JSON.parse(JSON.stringify({result: 'success'})))
        break;
    }
  }

  verifyUsageOfWrongCredentials(type) {
    switch (type) {
      case "email":
        utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.emailField, personalData.wrongEmail)
        utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.passwordField, Cypress.env('password'))
        break;
      case "password":
        utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.emailField, personalData.email)
        utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.passwordField, `${Cypress.env('password')}pass`)
        break;
      case "both":
        utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.emailField, personalData.wrongEmail)
        utilsPage.typeValueIntoElement(locatorsUtils.homepageLocators.passwordField, `${Cypress.env('password')}pass`)
        break;
    }
    utilsPage.clickOnElement(locatorsUtils.homepageLocators.signInButton)
  }

  verifySignUpOfNewUser(type) {
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.signUpTitleForm, 'be.visible')
      .should('have.text', locatorsTextValue.singUpTitleFormText)
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.signInButton, 'be.disabled')
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.signUpFooter, 'be.visible')
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.signUpForm).each(($el) => {
      this.setSignUpUserInformation(type, $el)
    })
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.signUpPrivacyInfo, 'be.visible')
      .should('have.text', locatorsTextValue.signUpPrivacyInfoText)
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.signUpPrivacyInfoCheckbox, 'exist').click({force: true})
    this.verifySignUpButton(type)
  }

  verifySignUpInfoContent(){
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.signUpInfoContainer, 'be.visible')
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.signUpInfoList, 'be.visible')
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.signUpInfoLogo, 'be.visible')
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.signUpInfoFooter, 'be.visible')
  }

  setSignUpUserInformation(type, locator){
    switch (locator.text()){
      case locatorsTextValue.signUpEmailText:
        if(type === 'valid'){
          utilsPage.typeValueIntoElement(locator.siblings(), personalData.email)
        }else if(type === 'invalid email'){
          utilsPage.typeValueIntoElement(locator.siblings(), personalData.wrongEmail.split('.')[0])
        }
        break;
      case locatorsTextValue.signUpNameText:
        utilsPage.typeValueIntoElement(locator.siblings(), personalData.name)
        break;
      case locatorsTextValue.signUpOrganizationText:
        utilsPage.typeValueIntoElement(locator.siblings(), personalData.organization)
        break;
      default:
        fail("There is no matched text for that locator")
    }
  }

  verifySignUpButton(type) {
    if(type === 'empty email'){
      utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.signInButton, 'be.disabled')
    }else if(type === 'invalid email'){
      utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.signInButton, 'be.enabled').click()
      utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.signUpErrorField, 'be.visible')
        .should('have.text', responseMessages.signUpErrorMessage)
    }else{
      utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.signInButton, 'be.enabled').click()
    }
  }
}

export const homepage = new Homepage()
