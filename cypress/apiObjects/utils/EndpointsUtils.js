export default class EndpointsUtils {

  devicesEndpoints = {
    devicesByKey: (key) => `/projects/${key}/device/devices`
  }
}

export const endpointsUtils = new EndpointsUtils()
