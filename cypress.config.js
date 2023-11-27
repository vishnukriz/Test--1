const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1600,
  viewportHeight: 900,
  env:{
    testportal : 'https://practicetestautomation.com/practice-test-login/',
    user : 'student',
    pwd : 'Password123'
  }

  
});



