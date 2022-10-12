/// <reference types="Cypress" />
import { Then } from "cypress-cucumber-preprocessor/steps"
import {projectOverviewPage} from "../../../pageObjects/ProjectOverviewPage";

Then(/^I land in project overview page and validate all elements$/, () => {
  projectOverviewPage.checkLandingInPage()
})

