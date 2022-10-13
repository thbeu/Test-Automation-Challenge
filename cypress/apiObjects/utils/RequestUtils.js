export default class RequestUtils {

  buildURL(subUrl) {
    const baseURL = Cypress.env("url") + "api/v1"
    return `${baseURL}${subUrl}`
  }
}

export const requestUtils = new RequestUtils()
