export default class RequestUtils {

  buildURL(subUrl) {
    const baseURL = Cypress.env("url") + "api/v1"
    return `${baseURL}${subUrl}`
  }

  buildBodyCreateDevice(name, serial, slotId){
    return `{"name": ${name}, "deviceRequirements": {"openstf.serial": ${serial}, "webmate.slotId": ${slotId}}}`
  }
}

export const requestUtils = new RequestUtils()
