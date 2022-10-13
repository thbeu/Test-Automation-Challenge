export default class EndpointsUtils {

  devicesEndpoints = {
    activeDevices: (projectKey) => `/projects/${projectKey}/device/devices`,
    deviceByID: (deviceID) => `/device/devices/${deviceID}`,

  }
}

export const endpointsUtils = new EndpointsUtils()
