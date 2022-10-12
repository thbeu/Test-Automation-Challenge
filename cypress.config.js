const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.js",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index')(on, config)
    },
  },
});
