import projectData from "../../fixtures/projectsData.json";

export default class Utils {

  getSlotId(type){
    return type === 'desktop' ? projectData[Cypress.env('projectName')].desktopSlotId : projectData[Cypress.env('projectName')].mobileSlotId
  }
}

export const utils = new Utils()
