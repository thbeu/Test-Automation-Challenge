import {utilsPage} from "./utils/Utils";
import {locatorsUtils} from "./utils/LocatorsUtils";

export default class Homepage {

  verifyLandingInHomePage(){
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.emailField, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.passwordField, "be.visible")
    utilsPage.waitUntilElementIsWithStatus(locatorsUtils.homepageLocators.signInButton, "be.disabled")
  }
}

export const homepage = new Homepage()
