export default class RequestUtils {

  buildURL(subUrl) {
    const baseURL = Cypress.env("url") + "api/v1"
    return `${baseURL}${subUrl}`
  }

  buildBodyCreateDeviceMobile(name, serial, slotId){
    return `{"name": "${name}", "deviceRequirements": {"openstf.serial": "${serial}", "webmate.slotId": "${slotId}"}}`
  }

  buildBodyCreateDeviceDesktop(name, serial, slotId){
    return `{"name": "${name}", "deviceRequirements": {"vcloud.templateId": "${serial}", "console.resolution":{"width":1920,"height":1080}, "webmate.slotId": "${slotId}"}}`
  }
}

export const requestUtils = new RequestUtils()
