import {endpointsUtils} from "./utils/EndpointsUtils";
import {requestUtils} from "./utils/RequestUtils";
import {utils} from "./utils/Utils";
import personalData from "../fixtures/personalData.json";
import projectsData from "../fixtures/projectsData.json";
import responseMessages from "../fixtures/responseMessages.json"

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

  deleteDevice(deviceID) {
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

    cy.get('@name').then((name) => {
      cy.get('@serial').then((serial) => {
        cy.request({
          method: 'POST',
          url: requestUtils.buildURL(endpointsUtils.devicesEndpoints.devices(projectId)),
          headers: {
            'Content-Type': 'application/json',
            'webmate.api-token': apiToken,
            'webmate.user': personalData.email
          },
          body: type === 'desktop' ? requestUtils.buildBodyCreateDeviceDesktop(name, serial, utils.getSlotId(type)) :
            requestUtils.buildBodyCreateDeviceMobile(name, serial, utils.getSlotId(type))
        }).then(({status, body}) => {
          expect(status).equal(200)
          cy.wrap(body.id).as("activeDeviceID")
        })
      })
    })
  }

  filterDeviceByTypeAndOS(type, os){
    this.getDeployables(utils.getSlotId(type))
    cy.get("@availableDevices").then((availableDevices) => {
      let notFound = true
      for(let x = 0; x < availableDevices.length; ++x){
        let device = availableDevices[x]
        if(device['deviceProperties']['machine.platform.type'].toString().toLowerCase() === os){
          if(type === 'desktop'){
            cy.log(device['deviceProperties']['machine.browsers'][0]['platform'])
            cy.wrap(device['deviceProperties']['machine.browsers'][0]['platform']).as('name')
            cy.wrap(device['deviceProperties']['vcloud.templateId']).as('serial')
          } else {
            cy.log(device['deviceProperties']['machine.browsers'][0]['model'])
            cy.wrap(device['deviceProperties']['machine.browsers'][0]['model']).as('name')
            cy.wrap(device['deviceProperties']['openstf.serial']).as('serial')
          }
          notFound = false
          break;
        }
      }
      cy.log("Found: " + notFound)
      cy.pause()
      cy.skipOn(notFound)
    })
  }

  getDeviceById(deviceID){
    const apiToken = atob(personalData.apiToken)

    cy.request({
      method: 'GET',
      url: requestUtils.buildURL(endpointsUtils.devicesEndpoints.deviceByID(deviceID)),
      headers: {
        'webmate.api-token': apiToken,
        'webmate.user': personalData.email
      }
    }).then(({status, body}) => {
      expect(status).equal(200)
      cy.wrap(body).as('deviceBody')
    })
  }

  verifyDeviceIdBySlotIdIsRunning(type){
    this.getAllDevices(projectsData[Cypress.env("projectName")].key, 'getAllDevices')
    cy.get('@getAllDevices').then((devices) => {
      for(let x = 0; x < devices.length; ++x){
        this.getDeviceById(devices[x])
        cy.get('@deviceBody').then((deviceBody) => {
          if(deviceBody['slot'].toString() === utils.getSlotId(type).toString()){
            if(type === 'desktop'){
              expect(deviceBody["state"]).equal(responseMessages.deviceRunningStatus)
            }
            cy.wrap(deviceBody['id']).as('deviceIdOfSlotId')
          }
        })
      }
    })
  }
}

export const devices = new Devices()
