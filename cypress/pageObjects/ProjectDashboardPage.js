import projectsData from "../fixtures/projectsData.json"

import {utilsPage} from "./utils/Utils";
import {locatorsUtils} from "./utils/LocatorsUtils";
import {commonPagesUtils} from "./utils/CommonPagesUtils";

export default class ProjectDashboardPagePage {

  checkLandingInPage(){
    commonPagesUtils.validatePageBaseElements("Project Dashboard")
  }
}

export const projectDashboardPage = new ProjectDashboardPagePage()
