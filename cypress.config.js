const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/test/**/*.spec.js",
     baseUrl: 'https://practicetestautomation.com/practice-test-login/',
      viewportWidth: 1280,
        viewportHeight: 720,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
