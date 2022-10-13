import {endpointsUtils} from "./utils/EndpointsUtils";
import {requestUtils} from "./utils/RequestUtils";
import personalData from "../fixtures/personalData.json";

export default class Devices {

  getAllDevices(projectKey, aliasName) {
    const apiToken = atob(personalData.apiToken)

    cy.request({
      method: 'GET',
      url: requestUtils.buildURL(endpointsUtils.devicesEndpoints.devicesByKey(projectKey)),
      headers: {
        'webmate.api-token': apiToken,
        'webmate.user': personalData.email
      }
    }).then(({status, body}) => {
      expect(status).equal(200)
      cy.wrap(body).as(aliasName)
    })
  }
}

export const devices = new Devices()
