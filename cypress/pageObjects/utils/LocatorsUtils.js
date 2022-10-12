export default class LocatorsUtils {
  homepageLocators = {
    emailField: '[data-testing-id="login-userfield"]',
    passwordField: '[data-testing-id="login-passwordfield"]',
    signInButton: '[data-testing-id="login-submit-button"]',
    signUpLink: '[]',
    forgotPassword: '[]'
  }

  projectsOverviewPageLocators = {
    projectChooserDropdown: '[data-testing-id="projectchooser-dropdown"]'
  }
}

export const locatorsUtils = new LocatorsUtils()
