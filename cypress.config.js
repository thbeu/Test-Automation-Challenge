const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "zqmuj6",
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    supportFile: "cypress/support/e2e.js",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index')(on, config)
    },
  },
});
