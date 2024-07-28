const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  
  env: {
    NODE_TLS_REJECT_UNAUTHORIZED: '0' 
  },

  e2e: {
    baseUrl:'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
     
    },
  },
});
