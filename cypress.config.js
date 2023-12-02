// const { defineConfig } = require("cypress");     // Common JS exportation
import { defineConfig } from 'cypress';   //ES MODULE: system modulation structure. It is used to import and exportx

export default defineConfig({
  viewportHeight: 1080,         // Default height in pixels for the application under tests' viewport. 
  viewportWidth: 1920,          // Default width in pixels for the application under tests' viewport.
  watchForFileChanges: false,   // Disables automatic file change monitoring, allowing manual control over when tests are rerun after making modifications.
  chromeWebSecurity: false,     // Disables the Chrome browser's web security policy, allowing bypassing CORS restrictions during test execution.
  video: false,                 // No video recording of the test execution will be performed
  retries: process.env.CI ? 2 : 0,  // Number of times to retry a failed test: 2 times on CI and 0 for local configuration
  // testIsolation: false,         // Test execution will not occur in isolation. My test cases will be independent, as a good practice
  
  // --------------- E2E Testing runner ------------------------------------------------------
  e2e: {  
    specPattern: ['cypress/tests/**/*.cy.{js,jsx,ts,tsx}'],     // Glob pattern to determine what test files to load
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrlDemoQA: 'https://demoqa.com',
      baseUrlSawglab: 'https://xxx',
    }
  },
});