import {endpointsUtils} from "./utils/EndpointsUtils";
import {requestUtils} from "./utils/RequestUtils";
import personalData from "../fixtures/personalData.json";

export default class Devices {

  getAllDevices(projectKey, aliasName) {
    const apiToken = atob(personalData.apiToken)

    cy.request({
      method: 'GET',
      url: requestUtils.buildURL(endpointsUtils.devicesEndpoints.activeDevices(projectKey)),
      headers: {
        'webmate.api-token': apiToken,
        'webmate.user': personalData.email
      }
    }).then(({status, body}) => {
      expect(status).equal(200)
      cy.wrap(body).as(aliasName)
    })
  }

  deleteDevice(projectKey, deviceID) {
    const apiToken = atob(personalData.apiToken)

    cy.request({
      method: 'DELETE',
      url: requestUtils.buildURL(endpointsUtils.devicesEndpoints.deviceByID(deviceID)),
      headers: {
        'webmate.api-token': apiToken,
        'webmate.user': personalData.email
      }
    }).then(({status}) => {
      expect(status).equal(200)
    })
  }
}

export const devices = new Devices()
