const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries : {"runMode": 1, "openMode": 1},
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1600,
  viewportHeight: 900,
  env:{
    testportal : 'https://practicetestautomation.com/practice-test-login/',
    amazonurl : "https://www.amazon.com/",
    uploadpageurl : "https://demo.imacros.net/Automate/FileUploadDemo",
    user : 'student',
    pwd : 'Password123'
  }

  
});



