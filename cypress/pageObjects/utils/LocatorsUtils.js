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
    nonExistentResults: '[class="wm-l-projectsoverview-no-contents ng-star-inserted"]'
  }

  projectDashboardPageLocators = {
    projectInfoContainer: '[data-testing-id="project-info"]',
    deviceSlotUtilizationInfoContainer: '[data-testing-id="device-slot-utilization-info"]',
    totalUsersNumberContainer: '[data-testing-id="user-amount-total"]',
    activeUsersContainer: '[data-testing-id="user-amount-active"]',
    devicesSlotOverviewContainer: '[data-testing-id="slot-overview-container"]',
    projectActivityContainer: '[data-testing-id="project-activity-container"]',
    jobRunsContainer: '[data-testing-id="recent-jobruns-container"]',
    //locator that starts with "device-slot-overview-entry-"
    deviceEntry: '[data-testing-id^="device-slot-overview-entry-"]',
    deviceEntryByKey: (key) => `[data-testing-id="device-slot-overview-entry-${key}"]`,
  }

  topBarLocators = {
    signOutButton: '[data-testing-id="navbar-user-menu-signout"]',
    configurePlan: '[data-testing-id="topbar-helt-label"]',
    helpDropdown: '[data-testing-id="helpdropdown-label"]',
    userNotification: '[data-testing-id="usernotifications-label"]',
    webmateLogo: '[class="wm-l-topbar-logo"]',
    topBar: '[class="wm-l-topbar"]'
  }

  sideBarLocators = {
    sideBar: '[class="wm-sidenav"]',
    deviceHome: '[data-testing-id="project_dasboard-device-home"]',
    deviceApps: '[data-testing-id="project_dasboard-device-apps"]',
    testLabLink: '[data-testing-id="project_dasboard-testlab-link"]',
    devicesLink: '[data-testing-id="project_dasboard-device-link"]',
    repoLink: '[data-testing-id="project-dashboard-repo-link"]'
  }

  commonLocators = {
    tooltipText: '[class="p-tooltip-text"]',
    userAvatar: '[data-testing-id="user-avatar"]',
    pagesHeader: '[class="wm-topbar-header"]',
    projectOverviewCardByKey: (key) => `[data-testing-id=projectoverview-card-${key}]`,
    projectOverviewNameByKey: (key) => `[data-testing-id=projectoverview-card-${key}-name]`,
    projectOverviewOpenButtonByKey: (key) => `[data-testing-id=projectoverview-card-${key}-openbtn]`,
    projectOverviewDeviceButtonByKey: (key) => `[data-testing-id=projectoverview-card-${key}-devicesbtn]`,
    projectDropdownByKey: (key) => `[data-testing-id="projectchooser-entry-${key}"]`,
    projectDescriptionBody: '[class="wm-projectcard-description-body"]',
    projectLogo: '[class="wm-projectsummary-logo"]'
  }
}

export const locatorsUtils = new LocatorsUtils()
