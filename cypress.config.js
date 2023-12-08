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
  
  // --------------- E2E Testing runner ------------------------------------------------------//
  e2e: {  
    specPattern: ['cypress/tests/**/*.cy.{js,jsx,ts,tsx}'],     // Glob pattern to determine what test files to load
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
  // --------------- DemoQA SUT ----------------------------------------------------------------//
      baseUrlDemoQA: 'https://demoqa.com',
      baseUrlSawglab: 'https://www.saucedemo.com',
  
      // --------------- Sawg lab SUT ----------------------------------------------------------//
      SawglabSUT: {
            endpoint: {
              inventory: '/inventory.html',
              cart: '/cart.html',
              checkoutOne: '/checkout-step-one.html',
              checkoutTwo: '/checkout-step-two.html',
              checkoutAll: '/checkout-complete.html',
              product: '/inventory-item.html',
            },
            login: {
              users: {
                correctUser: 'standard_user',
                correctPass: 'secret_sauce',
                lockUser: 'locked_out_user',
                problemUser: 'problem_user',
                passInv: 'invalid_password',
                glitchUser: 'performance_glitch_user',
                userInv: 'invalid_username',
              },
              errorMsg: {
                inventoryError: "Epic sadface: You can only access '/inventory.html' when you are logged in.",
                cartError: "Epic sadface: You can only access '/cart.html' when you are logged in.",
                checkoutOneError: "Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.",
                checkoutTwoError: "Epic sadface: You can only access '/checkout-step-two.html' when you are logged in.",
                checkoutAllError: "Epic sadface: You can only access '/checkout-complete.html' when you are logged in.",
                inventoryItemError: "Epic sadface: You can only access '/inventory-item.html' when you are logged in.",
                lockedUser: 'Epic sadface: Sorry, this user has been locked out.',
                PassOrUserInv: 'Epic sadface: Username and password do not match any user in this service',
                UserNull: 'Epic sadface: Username is required',
                PassNull: 'Epic sadface: Password is required',
              },
            },
            checkout: {
              errorMsg: {
                BusinessRule2: 'Error: First Name is required',
                BusinessRule3: 'Error: Last Name is required',
                BusinessRule4: 'Error: Postal Code is required',
                BusinessRule5: 'Error: Special characters are not allowed',
                BusinessRule6: 'Error: Special characters are not allowed',
                BusinessRule7: 'Error: Special characters are not allowed',
                BusinessRule8: 'Error: Numeric characters not allowed',
                BusinessRule9: 'Error: Numeric characters not allowed',
              },
            },

          },
    }
  },
});