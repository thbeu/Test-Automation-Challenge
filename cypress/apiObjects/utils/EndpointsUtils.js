export default class EndpointsUtils {

  devicesEndpoints = {
    devices: (projectId) => `/projects/${projectId}/device/devices`,
    deviceByID: (deviceID) => `/device/devices/${deviceID}`,
    deployables: (slotId) => `/slots/${slotId}/deployables`
  }
}

export const endpointsUtils = new EndpointsUtils()
