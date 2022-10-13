import "cypress-wait-until";

export default class Utils {

  /**
   *
   * @param locator
   * @param status -> status we want to validate. examples:
   *  exist
   *  be.enabled
   *  be.disable
   *  be.visible
   *
   * @returns {Cypress.Chainable<JQuery<*>>}
   */
  getElementIfHaveStatus(locator, status) {
    let elem = cy.get(locator)
    elem.should(status)
    return elem
  }

  /**
   *
   * @param locator
   * @param status -> status we want to validate. examples:
   *  exist
   *  be.enabled
   *  be.disable
   *  be.visible
   *
   *  @returns {Cypress.Chainable<JQuery<*>>}
   */
  waitUntilElementIsWithStatus(locator, status = "exist") {
    cy.waitUntil(() => {
      return this.getElementIfHaveStatus(locator, status)
    })
    return this.getElementIfHaveStatus(locator, status)
  }

  clickOnElement(locator) {
    cy.waitUntil(() =>
        cy.get(locator)
          .as('elemAlias')
          .wait(10) // for some reason this might be needed (https://github.com/cypress-io/cypress/issues/7306#issuecomment-636009167)
          .then($el => Cypress.dom.isAttached($el)),
      {timeout: 1000, interval: 10})
      .get('@elemAlias')
      .click()
  }

  typeValueIntoElement(locator, value, typeDelay) {
    this.waitUntilElementIsWithStatus(locator, "be.visible")
      .type(value, {
        log: false,
        force: true,
        delay: typeDelay
      })
      .should('have.value', value)
  }

  clearValueFromElement(locator) {
    this.waitUntilElementIsWithStatus(locator, "exist")
      .clear({force: true})
  }

  clearCookies(){
    cy.window().then((window) => {
      window.location.href = 'about:blank'
      window.sessionStorage.clear();
      window.localStorage.clear();
    })
    cy.clearCookies({domain: null})
    cy.clearLocalStorage()
  }

  triggerMouseEnterElement(locator) {
    cy.wait(500)
    cy.waitUntil(() =>
        cy.get(locator)
          .as('elemAlias')
          .wait(10) // for some reason this might be needed (https://github.com/cypress-io/cypress/issues/7306#issuecomment-636009167)
          .then($el => Cypress.dom.isAttached($el)),
      {timeout: 1000, interval: 10})
      .get('@elemAlias').trigger("mouseenter")
  }

  interceptPasswordResetRequest(){
    cy.intercept({
      method: "POST",
      url: "/api/v1/users/reset-request"
    }).as('reset-request')
  }

  waitForInterceptionOfAliasToOccur(alias, expectedMessage){
    cy.wait(alias).its('response.body').should('deep.eq', expectedMessage)
  }
}

export const utilsPage = new Utils()
