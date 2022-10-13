import {endpointsUtils} from "./utils/EndpointsUtils";
import {requestUtils} from "./utils/RequestUtils";
import personalData from "../fixtures/personalData.json";
import projectData from "../fixtures/projectsData.json";

export default class Devices {

  getAllDevices(projectId, aliasName) {
    const apiToken = atob(personalData.apiToken)

    cy.request({
      method: 'GET',
      url: requestUtils.buildURL(endpointsUtils.devicesEndpoints.devices(projectId)),
      headers: {
        'webmate.api-token': apiToken,
        'webmate.user': personalData.email
      }
    }).then(({status, body}) => {
      expect(status).equal(200)
      cy.wrap(body).as(aliasName)
    })
  }

  deleteDevice(projectId, deviceID) {
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

  getDeployables(slotId){
    const apiToken = atob(personalData.apiToken)

    cy.request({
      method: 'GET',
      url: requestUtils.buildURL(endpointsUtils.devicesEndpoints.deployables(slotId)),
      headers: {
        'webmate.api-token': apiToken,
        'webmate.user': personalData.email
      }
    }).then(({status, body}) => {
      expect(status).equal(200)
      cy.log('Body = ' +  body)
      cy.wrap(body).then((devices) => {
        let available_devices = []
        for(let x = 0; x < devices.length; ++x){
          if(devices[x]['deviceProperties']['webmate.deviceUnavailable'] === false) {
            available_devices.push(devices[x])
          }
        }
        cy.skipOn(available_devices.length === 0)
        cy.wrap(available_devices).as('availableDevices')
      })

    })
  }

  createDevice(projectId, type, os){
    const apiToken = atob(personalData.apiToken)

    this.filterDeviceByTypeAndOS(type, os)

    cy.request({
      method: 'POST',
      url: requestUtils.buildURL(endpointsUtils.devicesEndpoints.devices(projectId)),
      headers: {
        'webmate.api-token': apiToken,
        'webmate.user': personalData.email
      },
      body: requestUtils.buildBodyCreateDevice()
    }).then(({status}) => {
      expect(status).equal(200)
    })
  }

  filterDeviceByTypeAndOS(type, os){
    this.getAvailableDevices(type)
  }

  getAvailableDevices(type){
    this.getDeployables(type === 'desktop' ? projectData[Cypress.env('projectName')].desktopSlotId :
      projectData[Cypress.env('projectName')].mobileSlotId)
  }
}

export const devices = new Devices()
