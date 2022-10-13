export default class LocatorsUtils {

  homepageLocators = {
    emailField: '[data-testing-id="login-userfield"]',
    passwordField: '[data-testing-id="login-passwordfield"]',
    signInButton: '[data-testing-id="login-submit-button"]',
    signUpLink: '[data-testing-id="signup-link"]',
    signUpTitleForm: '[class="signup-form-header"]',
    signUpInfoContainer: '[class="signup-info-container"]',
    signUpInfoLogo: '[class="signup-info-logo"]',
    signUpInfoList: '[class="signup-info-list"]',
    signUpInfoFooter: '[class="signup-info-footer"]',
    signUpFooter: '[class="signup-footer"]',
    signUpForm: '[class="signup-form-item"]',
    signUpPrivacyInfo: '[class="privacy-info"]',
    signUpSubmitButton: '[data-testing-id="login-submit-button"]',
    forgotPassword: '[data-testing-id="forgot-password-link"]',
    resetPasswordTitle: '[class="wm-card-title"]',
    resetPasswordField: '[data-testing-id="reset-password-passwordfield"]',
    resetPasswordButton: '[data-testing-id="reset-password-submit-button"]',
    resetPasswordErrorMessage: '[class="wm-l-reset-password-errormessage"]',
    loginErrorMessage: '[data-testing-id="login-errorfield"]',
  }

  projectsOverviewPageLocators = {
    projectChooserDropdown: '[data-testing-id="projectchooser-dropdown"]',
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
    refreshButton: '[ptooltip="Refresh"]',
    activityEntries: '[data-testing-id="project-activity-entry"]',
    activityMessage: '[class="ng-star-inserted"]'
  }

  devicesPageLocators = {
    usedDevicesCheckbox: '[class="wm-project-devices-topbar-checkbox mr-2"]',
    useDevicesLabel: '[class="wm-project-devices-topbar-checkbox-text"]',
    appsButton: '[data-testing-id="project-devices-page-appsbtn"]',
    reservationsButton: '[data-testing-id="project-devices-page-reservationbtn"]',
    fullDevicesContainer: '[class="wm-project-devices-content wm-list ng-star-inserted"]',
    devicesInProjectContainer: '[class="wm-project-devices-content-devices ng-star-inserted"]',
    devicesInProjectHeader: '[class="wm-project-devices-content-devices-header"]',
    devicesInProjectList: '[class="wm-resourcesummarycontainer wm-list"]',
    devicesSlotsInProjectContainer: '[class="wm-project-devices-content-slots"]',
    devicesSlotsInProjectHeader: '[class="wm-project-devices-content-slots-header"]',
    devicesSlotsInProjectList: '[class="wm-resourcesummarycontainer wm-list"]',
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
    projectPlaceholder: (value) => `[placeholder="${value}"]`,
    projectDescriptionBody: '[class="wm-projectcard-description-body"]',
    projectLogo: '[class="wm-projectsummary-logo"]'
  }
}

export const locatorsUtils = new LocatorsUtils()
