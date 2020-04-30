export default class basePage {
  static pause(ms) {
    cy.wait(ms);
  }

  static logInfo(message) {
    cy.log(message);
  }

  static setMobileViewport() {
    cy.viewport("iphone-x");
  }

  static setDesktopViewport() {
    cy.viewport("macbook-13");
  }

  static setFullHDViewport() {
    cy.viewport(1980, 1080);
  }
}
