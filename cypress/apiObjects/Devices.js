import {endpointsUtils} from "./utils/EndpointsUtils";
import {requestUtils} from "./utils/RequestUtils";
import personalData from "../fixtures/personalData.json";

export default class Devices {

  getAllRequests(projectKey) {
    const apiToken = atob(personalData.apiToken)

    cy.request({
      method: 'GET',
      url: requestUtils.buildURL(endpointsUtils.devicesEndpoints.devicesByKey(projectKey)),
      headers: {
        'webmate.api-token': apiToken,
        'webmate.user': personalData.email
      }
    }).then(({status, body}) => {
      cy.log("Status Code: " + status)
      cy.log("Body: " + body)
      cy.pause()
    })
  }
}

export const devices = new Devices()
