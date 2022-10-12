export default class LocatorsUtils {
  homepageLocators = {
    emailField: '[data-testing-id="login-userfield"]',
    passwordField: '[data-testing-id="login-passwordfield"]',
    signInButton: '[data-testing-id="login-submit-button"]',
    signUpLink: '[]',
    forgotPassword: '[]'
  }

  projectsOverviewPageLocators = {
    projectChooserDropdown: '[data-testing-id="projectchooser-dropdown"]',
    filterProjectPlaceholder: '[placeholder="Filter projects"]',
    //locator that starts with "projectoverview-card-"
    projectOverviewCard: '[data-testing-id^="projectoverview-card-"]'
  }

  commonLocators = {
    tooltipText: '[class="p-tooltip-text"]',
    userAvatar: '[data-testing-id="user-avatar"]',
    signOutButton: '[data-testing-id="navbar-user-menu-signout"]'
  }
}

export const locatorsUtils = new LocatorsUtils()
