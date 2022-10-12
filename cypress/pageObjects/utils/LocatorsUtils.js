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
    projectOverviewCard: '[data-testing-id^="projectoverview-card-"]',
    projectOverviewCardByKey: (key) => `[data-testing-id=projectoverview-card-${key}]`,
    projectOverviewNameByKey: (key) => `[data-testing-id=projectoverview-card-${key}-name]`,
    projectDescriptionBody: '[class="wm-projectcard-description-body"]',
    projectLogo: '[class="wm-projectsummary-logo"]',
    nonExistentResults: '[class="wm-l-projectsoverview-no-contents ng-star-inserted"]'
  }

  commonLocators = {
    tooltipText: '[class="p-tooltip-text"]',
    userAvatar: '[data-testing-id="user-avatar"]',
    signOutButton: '[data-testing-id="navbar-user-menu-signout"]',
    pagesHeader: '[class="wm-topbar-header"]',
    configurePlan: '[data-testing-id="topbar-helt-label"]',
    helpDropdown: '[data-testing-id="helpdropdown-label"]',
    userNotification: '[data-testing-id="usernotifications-label"]',
    webmateLogo: '[class="wm-l-topbar-logo"]'
  }
}

export const locatorsUtils = new LocatorsUtils()
